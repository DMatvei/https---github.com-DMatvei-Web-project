const express = require("express");
const expressHbs = require("express-handlebars");
const hbs = require("hbs");
const app = express();
const states = require("./frontend/scripts/states")
const comments = require("./frontend/scripts/comments")

// устанавливаем настройки для файлов layout
app.engine("hbs", expressHbs.engine({
    layoutsDir: "views/layouts",
    defaultLayout: "layout",
    extname: "hbs"
}))

app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

hbs.registerHelper("createCommentsList", function(array) {
    let result = ""
    for (let i = 0; i < array.length; i++) {
        result += "<li>${array[i]}</li>"
    }
    return new hbs.SafeString("<ul>${result}</ul>")
})

app.use(express.static(__dirname + "/frontend"))

app.use("/state", function(_, response) {

    response.render("comment", {
        comments: ["comment1", "comment2", "comment3", "comment4"]
    });
});

//пост по id
app.use("/states/:id", function(__, responce) {
    const state = states.getState(__.params.id);
    const comment = comments.getComments(__.params.id)
    if (state == null) {
        responce.status(404).send("Error");
    } else {
        responce.render("state", {
            author: state.author,
            id: state.id,
            topic: state.topic,
            text: state.text,
            date: state.date,
            comments: comment
        });
    }
});

app.use("/states", function(_, response) {

    response.render("states.hbs");
});



app.listen(8001, function() {
    console.log('Сервер запущен')
})