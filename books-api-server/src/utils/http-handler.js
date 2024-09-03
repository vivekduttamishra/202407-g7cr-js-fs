const ValidationException = require('./validation-exception');
const NotFoundException = require('./not-found-exception');


const methodStatusMap = {
    GET: 200,
    POST: 201,
    PUT: 202,
    PATCH: 202,
    DELETE: 204
};

const exceptionMapper = {
    ValidationException: (e) => new HttpErrorResponse(400, e.errors),
    NotFoundException: (e) => new HttpErrorResponse(404, e.errors),
    ValidationError: (e) => new HttpErrorResponse(400, e.errors),
}

class Response {
    constructor(body, status = 200, headers = {}) {
        this.status = status;
        this.headers = headers;
        this.body = body;
    }

    send(response) {
        
        response
            .set(this.headers)
            .status(this.status)
            .send(this.body);
    }
}

class HttpErrorResponse extends Response {
    constructor(status, body = {}, headers = {}) {
        super({ status, ...body }, status, headers);
    }
}


function handleRequest(handler) {
    return async (request, response, next) => {

        try {
            var body = request.body ?? {};
            var params = request.params ?? {};
            var info = { ...body, ...params, body, params, query: request.query, request, response, next }
            
            var result = await handler(info);
            if (result === undefined) {
                return;
            }
            if (result instanceof Response)
                result.send(response);
            else {
                const status = methodStatusMap[request.method] ?? 200;
                response.status(status).send(result);
            }


        } catch (e) {

            console.log('error in handleRequest',e.constructor.name);
            var errorType = e.constructor.name;
            var errorResponse = exceptionMapper[errorType];
            if (errorResponse) {
                errorResponse(e).send(response);
            } else {
                new HttpErrorResponse(500, { status: 500, message: e.message })
                    .send(response);
            }

        }


    }
}

function nullIs404(request, response, next) {
   var _send = response.send.bind(response);

   response.send=body=>{
        console.log('body in send',body);
        
        if(body){
           return  _send(body);
        } else{
            response
                .status(404)
                .send({status:404, message:"Not Found", path:request.url , ...request.params})
        }
   }

   next();
}


module.exports = {
    handleRequest,
    Response,
    ValidationException,
    NotFoundException,
    nullIs404
};
