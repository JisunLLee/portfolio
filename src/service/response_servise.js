const Response = () => {
    return {
        success : (statusCode, data, act) => {
            return {statusCode:statusCode, act:act, result: "성공", data : data};
        },

        fail : (res, data={message:res.message, reason:res.reason}, act = "")=> {
            return {statusCode:res.statusCode, act:act, result: "실패", data : data};
        },

        serverError : ({act="", message = "SERVER ERROR", reason="SERVER ERROR"}) => {
            return {statusCode:500, act: act, result: "실패", data : {message : message, reason : reason}};
        },

        clientError : ({act="", message = "CLIENT ERROR", reason="CLIENT ERROR"}) => {
            return {statusCode:600, act: act, result: "실패", data : {message : message, reason : reason}};
        }
    }
}

exports.Response = Response;