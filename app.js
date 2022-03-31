var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var ejs = require('ejs');
var bodyParser = require("body-parser");
const { port, host } = require("./config");

var indexRouter = require("./routes/index");
var userRouter = require("./routes/user");
var downloadRoute = require("./routes/download");
var uploadRoute = require("./routes/upload");
var serachRoute = require("./routes/seacth")
var friendRoute = require("./routes/friend");
var cityRoute = require("./routes/city")
var MsgRouter = require("./routes/msg");
var exprssionRoute = require("./routes/expression");

var app = express();

var socket = require('./socket/socket')


app.set("public", path.join(__dirname, "public"));
app.engine('html', ejs.__express);
console.log(ejs.__express)


app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
let options = {
    setHeaders: function(res, path, stat) {
        res.set('Access-Control-Allow-Origin', '*')
    }
}
app.use(express.static(path.join(__dirname, "public"), options));
app.use(bodyParser.json());

app.all("*", function(req, res, next) {
    res.setHeader("charset", "utf-8");
    res.setHeader("Content-Type", "text/htlm");
    res.setHeader("Access-Control-Allow-Credentials", true);
    res.setHeader("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");

    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
});

app.use("/", indexRouter);
app.use("/user", userRouter);
app.use("/down", downloadRoute);
app.use("/upload", uploadRoute);
app.use("/search", serachRoute)
app.use("/friend", friendRoute)
app.use("/city", cityRoute)
app.use("/msg", MsgRouter);
app.use("/expression", exprssionRoute);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error");
});

app.listen(port, host, () => {
    console.log("你已启动地址=>  http://" + host + ":" + port);
});

// socket(app)

module.exports = app;