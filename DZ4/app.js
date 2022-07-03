const express = require("express");
const posts = require("./posts");
const commentsModel = require("./comments")

const app = express();
const urlencodedParser = express.urlencoded({extended : false}); //парсер

//все посты
app.get("/posts", function(request, responce) {
    responce.send(posts);
    console.log("Pressed /posts");
});
//пост по id
app.get("/posts/:id", function(request, responce) {
    const post = posts.getPost(request.params.id);
    if (post == null) {
        responce.status(404).send("Error");
    } else {
         responce.send(post); 
    }
});
//пишем коммент
app.get("/comment", function(request, responce) {
    responce.sendFile(__dirname + "/index.html");
});
//отправляем коммент
app.post("/comment", urlencodedParser, function(request, responce) {
    if (!request.body) return responce.sendStatus(400)

    console.log(request.body.userName, request.body.userText)
})
//коммент по id
app.get("/comment/:id", function(request, responce) {
    const comments = commentsModel.getPostCommentById(request.params.id);
    if (comments.length == 0) {
        responce.status(404).send("Error");
    } else { 
        responce.send(comments);
    }
})

app.listen(8000, function() {
    console.log("Listening...");
});

