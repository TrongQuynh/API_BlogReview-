
// Router
const homeRouter = require("../routers/home");
const accountRouter = require("../routers/account");
const postRouter = require("../routers/post");

function Router(app){
    app.use('/',homeRouter);
    app.use('/accounts',accountRouter);
    app.use("/post",postRouter);
}

module.exports = Router