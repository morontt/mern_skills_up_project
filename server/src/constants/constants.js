module.exports.MONGOOSE_VALIDATION_ERR_KEY = 'ValidationError';

module.exports.USERS_COLLECTION_NAME = 'Users';

module.exports.USERS_BASE_URL = '/api/v1/users';

module.exports.RESPONSE_CODE = {
    UNPROCESSABLE_ENTITY: 422,
    OK: 200,
    CREATED: 201,
    VALIDATION_ERROR: 400,
    SERVER_ERROR: 500
};

module.exports.RESPONSE_MESSAGE = {
    UNPROCESSABLE_ENTITY: 'Unprocessable entity',
    OK: 'OK',
    CREATED: 'Created',
    VALIDATION_ERROR: 'Validation error',
    SERVER_ERROR: 'Server error'
};