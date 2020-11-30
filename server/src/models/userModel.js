const enums = require('../enum/enum')
const security = require('../utils/security');
const mongoose = require('../utils/mongoose').Mongoose,
    Schema = mongoose.Schema;
const errorSerializer = require('../utils/modelErrorSerializer');

const modelName = 'User';
const scenarioVirtualProp = 'scenario';
const passwordVirtualProp = 'password';

const schema = new Schema({
    username: {
        type: String,
        unique: true,
        required: [true, 'username is required']
    },
    hashedPassword: {
        type: String,
        required: [function () {
            switch (this._scenario) {
                case enums.Scenarios.SCENARIO_AUTHENTICATE:
                    return true;
                default:
                    return false;
            }
        }, 'password is required']
    },
    salt: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    },
});

schema.virtual(scenarioVirtualProp)
    .set(function (scenario) {
        this._scenario = scenario;
    })
    .get(function () {
        return this._scenario;
    });

schema.virtual(passwordVirtualProp)
    .set(function (password) {
        if (password && ([enums.Scenarios.SCENARIO_AUTHENTICATE].includes(this._scenario))) {
            this._plainPassword = password;
            this.salt = Math.random();
            this.hashedPassword = security.encryptPassword(password, this.salt)
        }
    })
    .get(function () {
        return this._plainPassword;
    });

exports.User = mongoose.model(modelName, schema);

exports.ValidationErrorResponseSerializer = function (err) {
    let props = ['username', ['hashedPassword', 'password']];
    return errorSerializer(props, err);
}