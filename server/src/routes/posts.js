// app.get('/api/articles', function(req, res) {
//     res.send('This is not implemented now');
// });

module.exports = function(app) {

    app.get('/api/v1/posts', function(req, res) {
        res.send('This is not implemented now');
    });


    // let posts = {
    //     list: function (req, res) {
    //         res.send('user list');
    //     },
    //
    //     get: function (req, res) {
    //         res.send('user ' + escapeHtml(req.params.uid))
    //     },
    //
    //
    //     post: function (req, res) {
    //         res.send('user ' + escapeHtml(req.params.uid))
    //     },
    //
    //     delete: function (req, res) {
    //         res.send('delete users');
    //     }
    // };
    //
    // app.map({
    //     '/posts': {
    //         get: posts.list,
    //         '/:uid': {
    //             get: posts.get,
    //             post: posts.post,
    //             delete: posts.delete,
    //         },
    //     }
    // });
};