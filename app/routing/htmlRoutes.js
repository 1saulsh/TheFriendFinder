console.log("HTML route connected");
//include path package. makes delivering pages easy while using express
var path= require("path");

//building routes, tell router what page to deliver based on thr URL
//place within a modules export function so that later the paths can be included in the server
//in my export i want to pass in parameter app which refers to express
module.exports = function (app) {
    
    //when the user hits the url/survey we want to deliver survey.html
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/survey.html")); 
    });
    

    //create route for homepage. if user is using app and not on predefined URL go ahead and bring them to home page
    app.use(function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/home.html"));  
    });
}