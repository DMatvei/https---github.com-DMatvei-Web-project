let posts = [
    { "author": "Armstrong", "date": Date(), "id": 1, "topic": "comment" },
    { "author": "Mr. Tomson", "date": Date(), "id": 2, "topic": "comment2" }
]

//получить пост
module.exports.getPost = function(id) {
    for (let i = 0; i < posts.length; i++) {
        if (posts[i].id == id) {
            return posts[i]
        }
    }
    return null
}

module.exports.date = posts //обращаемся к массиву