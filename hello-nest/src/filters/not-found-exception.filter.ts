import { ArgumentsHost, Catch, ExceptionFilter } from "@nestjs/common";
import { NotFoundException } from "../utils/not-found-exception";

//exception filter to map user define NotFoundException to http 404
@Catch(NotFoundException)
export class NotFoundExceptionFilter implements ExceptionFilter{
    catch(exception: NotFoundException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        response.status(404).json({
            statusCode: 404,
            message: exception.message,
            errors: exception.errors
        });
    }

}

