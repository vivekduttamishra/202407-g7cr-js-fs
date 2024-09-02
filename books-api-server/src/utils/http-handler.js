const ValidationException = require('./validation-exception');
const NotFoundException = require('./not-found-exception');


const methodStatusMap={
    GET: 200,
    POST:201,
    PUT:202,
    PATCH:202,
    DELETE:204
};

const exceptionMapper={
    ValidationException:400,
    NotFoundException:404,    
}

class Response{
    constructor(body, status=200, headers={}){
        this.status=status;
        this.headers=headers;
        this.body=body;
    }

    send(response){
        response.writeHead(this.status,this.headers);
        response
            .set(this.headers)
            .status(this.status)
            .send(this.body);
    }
}


function handleRequest( handler){
    return async (request, response, next)=>{

        try{
            var body= request.body??{};
            var params=request.params??{};
            var info = {...body, ...params,  body, params, query:request.query, request, response, next}

            var result = await handler(info);
            if(result===undefined){
                return ;
            }
            if(result instanceof Response)
                result.send(response);
            else{
                const status = methodStatusMap[request.method]??200;
                response.status(status).send(result);
            }


        }catch(e){

            var errorType= e.constructor.name;

            if(exceptionMapper[errorType]){
                const status = exceptionMapper[errorType];
                var errorResponse = new Response({message:e.message,  status:status,...e.params}, status);
                errorResponse.send(response);
            }else{
                const status = 500;
                var errorResponse = new Response({message:'Internal Server Error'}, status);
                errorResponse.send(response);
            }

        }


    }
}

module.exports={
    handleRequest,
    Response,
    ValidationException,
    NotFoundException,
 };
