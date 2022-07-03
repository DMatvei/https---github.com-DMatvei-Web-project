let states = [{
        "author": "Ktoto1",
        "date": Date(),
        "id": 1,
        "text": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim est cupiditate inventore fugiat illo consequatur exercitationem dolore esse eum architecto laudantium magni debitis beatae consequuntur, minus quaerat molestias voluptate modi facilis sunt maiores repudiandae? Ullam, alias? Eligendi voluptate vitae necessitatibus in, fugit reiciendis blanditiis fugiat voluptatum, ullam aliquam dolor molestias.",
        "topic": "topic1"
    },


    {
        "author": "Ktoto2",
        "date": Date(),
        "id": 2,
        "text": " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id sint porro nobis aut blanditiis fugit ipsam magnam pariatur beatae officia, accusamus assumenda, labore consequuntur atque eaque, omnis modi a. Repellendus doloribus blanditiis ducimus ullam debitis alias incidunt eaque libero neque, cumque molestias, reprehenderit eius ipsum doloremque totam eum vero architecto!",
        "topic": "topic2"
    },


    {
        "author": "Ktoto3",
        "date": Date(),
        "id": 3,
        "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio accusamus dolor voluptas velit doloribus sint officiis voluptate adipisci soluta praesentium quibusdam repellendus culpa, molestias ab corporis voluptatibus ratione eaque! Iusto qui eos unde eaque, exercitationem enim fugiat, aperiam vitae quo dignissimos ipsum suscipit ratione expedita impedit corporis quisquam. Dolore, similique.",
        "topic": "topic3"
    },

]

//получить пост
module.exports.getState = function(id) {
    for (let i = 0; i < states.length; i++) {
        if (states[i].id == id) {
            return states[i]
        }
    }
    return null
}

module.exports.date = states //обращаемся к массиву