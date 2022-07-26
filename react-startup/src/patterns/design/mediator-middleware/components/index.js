const app = require("express")();

app.use(
    "/",
    (req, res, next) => {
        req.headers["test-header"] = 1234;
        next();
    },
    (req, res, next) => {
        console.log(`Request has test header: ${!!req.headers["test-header"]}`);
        next();
    }
);