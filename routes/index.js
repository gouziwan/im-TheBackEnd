var express = require("express");
var router = express.Router();
/* GET home page. */
router.get("/", function(req, res, next) {
    res.type("html");
    res.render("../public/h5/index.html")
});


router.get(/^\/\bh5\b\/\bpages\b\/.+$/, function(req, res, next) {
    res.type("html");
    res.render("../public/h5/index.html")
})

module.exports = router;