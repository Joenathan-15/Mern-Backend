const {constant} = require("../constant")

const errorHandler = (err,req,res,next) => {
    const statusCode = res.statusCode ? res.statusCode: 500;
    switch (statusCode){
        case constant.VALIDATION_ERROR:
            res.json({ title: "Validation Faild" , message: err.message, stacktrace: err.stack});
            break;
        case constant.NOT_FOUND:
            res.json({ title: "Not Found" , message: err.message, stacktrace: err.stack});
            break;
        case constant.UNAUTHORIZED:
            res.json({ title: "UNAUTHORIZED" , message: err.message, stacktrace: err.stack});
            break;
        case constant.FORBIDDEN:
            res.json({ title: "Forbidden" , message: err.message, stacktrace: err.stack});
            break;
        case constant.SERVER_ERROR:
            res.json({ title: "Server Error" , message: err.message, stacktrace: err.stack});
            break;
        default:
            console.log("No Error All Good")
            break;
    }
};

module.exports = errorHandler