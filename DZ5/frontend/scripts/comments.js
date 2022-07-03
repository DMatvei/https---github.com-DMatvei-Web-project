let comments = [{
        "name": "name1",
        "text": "djflskjfsjfa",
        "id": 1
    },


    {
        "name": "name2",
        "text": "dnjkljjkljkl",
        "id": 1
    },


    {
        "name": "name2",
        "text": "dnjkljjkljkl",
        "id": 2
    },


    {
        "name": "name2",
        "text": "dnjkljjkljkl",
        "id": 2
    },


    {
        "name": "name2",
        "text": "dnjkljjkljkl",
        "id": 2
    },
]
module.exports.getComments = function(id) {
    let res = []
    for (let i = 0; i < comments.length; i++) {
        if (comments[i].id == parseInt(id)) {
            res.push(comments[i]);
        }
    }
    return res;
};

module.exports.date = comments;