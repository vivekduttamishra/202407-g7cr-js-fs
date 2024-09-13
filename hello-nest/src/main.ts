import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

const port =process.env.PORT ||5000;

const startServer = async()=>{
    console.log('starting server...');

    try{
        
        const server = await NestFactory.create(AppModule);
        await server.listen(port);
        console.log(`server started: http://localhost:${port}`);
    }catch(error:any){
        console.log('error starting server',error.message);
    }
    

};

startServer();