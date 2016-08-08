var express=require("express")
var app=express();

app.get('/',function(request,response){
  response.send("<h1>Hello Express</h1>");
});

app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views');
// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');

app.get("/users", function (request, response){
    // hard-coded user data
    var users_array = [
        {name: "Priyanka", email: "priyanka3007@codingdojo.com"},
        {name: "Dan", email: "dan@codingdojo.com"},
        {name: "Brendan", email: "brendan@codingdojo.com"},
        {name: "Andrew", email: "andrew@codingdojo.com"}
    ];
    response.render('users', {users: users_array});
})


app.listen(8000, function () {
  console.log("listening on port 8000");
})
