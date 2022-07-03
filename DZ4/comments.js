let comments = [
    { "name": "name1", "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, dolores maxime neque et voluptatem aperiam, amet distinctio maiores libero, eaque ipsum harum quam dolore qui tempora sunt saepe nulla adipisci!", "id": 1 },
    { "name": "name2", "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, rem.", "id": 2 }
]
module.exports.getPostCommentById = function(postId) {
    let res = []
    for (let i = 0; i < comments.length; i++) {
        if (comments[i].id == parseInt(postId)) {
            res.push(comments[i]);
        }
    }
    return res;
};

module.exports.date = comments;