const express = require("express");
const hbs = require("hbs");
const expressHbs = require("express-handlebars");

const app = express();
const jsonParser = express.json();

const MongoClient = require("mongodb").MongoClient;
const mongoClient = new MongoClient("mongodb://localhost:27017/");
const objectId = require("mongodb").ObjectId;
const urlencodedParser = express.urlencoded({ extended: false });

const states = require("./frontend/scripts/states")
const comments = require("./frontend/scripts/comments");

const { request } = require("express");


let comments_ = [{
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

let states_ = [{
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

app.engine("hbs", expressHbs.engine({
    layoutsDir: "views/layouts",
    defaultLayout: "layout",
    extname: "hbs"
}))

app.set("view engine", "hbs")


hbs.registerPartials(__dirname + "/views/partials")


app.use(express.static(__dirname + "/frontend"))

function rendPost(request, responce) {

    const idFromUser = Number(request.params.id);
    const postsCollection = request.app.locals.posts;
    const commentsCollection = request.app.locals.comments;

    postsCollection.findOne({ id: idFromUser }, (err, state) => {
        if (err) return console.log(err);

        commentsCollection.find({ id: idFromUser }).toArray((err, comments) => {
            if (err) return console.log(err);
            responce.render("state", {
                author: state.author,
                date: state.date,
                topic: state.topic,
                text: state.text,
                comments: comments
            });

        });
    });
}


let dbClient;
mongoClient.connect((err, client) => {


    if (err) return console.log(err);

    dbClient = client;
    app.locals.posts = client.db("postsbd").collection("posts");
    app.locals.comments = client.db("commentsbd").collection("comments");

    // app.locals.posts.insertMany(states_, function(err, results) {})
    // app.locals.comments.insertMany(comments_, function(err, result) {})

    app.listen(3000, function() {
        console.log("Сервер ожидает подключения...");
    });



});

app.post("/states/:id", urlencodedParser, (req, res) => {
    const idFromUser = Number(req.params.id);

    if (!req.body) return req.sendStatus(400);

    let comment = {
        name: req.body.login,
        text: req.body.commentArea,
        id: idFromUser
    }

    req.app.locals.comments.insertOne(comment, function(err, result) {

        if (err) return console.log(err);
        // console.log(result)
        // console.log(comment)
    });
    rendPost(req, res);

});


app.use("/states/:id", (request, responce) => {

    rendPost(request, responce);

});


app.use("/", function(request, response) {

    response.render("states.hbs");
});


process.on("SIGINT", () => {
    dbClient.close();
    process.exit();
});