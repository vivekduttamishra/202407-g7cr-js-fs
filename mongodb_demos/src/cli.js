var prompt=require('prompt-sync')();


class CLI{
    constructor(appName="CLI",options={}){

        var defaultOptions={
            init:async()=>{},
            close:async()=>{}
        }

        this.options={...defaultOptions,...options};

        this.appName=appName;
        this.commands={
           
        };    
        this.interactiveMode=false;
        this.addCommand(this.help.bind(this),'help','Provides Help for the available commands','?','h');
        this.addCommand(this.exit.bind(this),'exit', 'Exit the CLI', 'quit','q','x');
        this.addCommand(this.clear,'clear', 'Clears the console','cls');
    }

   




    addCommand(command, primaryName, helpText, ...aliases){
        if(!primaryName){
            if(command.name)
                primaryName=command.name;
            else
                throw new Error("No command name found");
        }

        this.commands[primaryName]={
            action:command,
            primaryName:primaryName,
            helpText: helpText || primaryName,
            aliases:aliases || [],
            isPrimary:true,
        };

        for(var alias of aliases){
            this.commands[alias]={
                action:command,
                primaryName: primaryName,
                helpText: helpText || primaryName,
                aliases:aliases,
                isPrimary:false,
            };
        }

       
    }



    async run(){
        var args= process.argv.slice(2); //remove node and app name,
       
        if(args.length===0){
            await this.runInteractive();
        }
        else{
            await this.runCommand(args[0],args.slice(1));
        }
        
    }

    parse(commandLine){
        var args= commandLine.split(' ');
        if(args.length===1){
            return {command:args[0], args:[]};
        }

        var result={
        };

        //> add-author vivek-dutta-mishra "Vivek Dutta Mishra" 4.5 299 "Author of Mahabharata"

        result.command=args[0];
        args=args.slice(1);
        result.args=[];
        var isMultiWorded=false;
        var multiWordArgs="";

        for(var arg of args){

            

            if(!isMultiWorded){
                if(!arg.startsWith('"')){
                    //normal situation.
                    result.args.push(arg);                   
                }
                else{
                    multiWordArgs=arg.substring(1);
                    isMultiWorded=true;
                }
            }
            else{
                if(arg.endsWith('"')){
                    arg=arg.substring(0, arg.length-1);
                    multiWordArgs+=" "+ arg;
                    result.args.push(multiWordArgs);
                    multiWordArgs="";
                    isMultiWorded=false;
                }else{
                    multiWordArgs+=" "+arg;
                }
            }
        }
        
        return result;

    }

    async runInteractive(){
        console.log(this.appName);
        this.interactiveMode=true;
        await this.options.init();

        while(true){
            var commandLine = prompt('> ');
            var {command, args}=this.parse(commandLine);
            await this.runCommand(command,args);
        }
    }

    async runCommand(command, args){
        //console.log(`Running ${command} ${args.join(' ')}`);
        if(!this.interactiveMode)
            await this.options.init();
        var command=this.commands[command];
        if(command){
            var result=command.action(...args);
            if(result===undefined){
                console.log('Command executed successfully');
            }


            if(result instanceof Promise)
                result = await result;
            
            console.log(result);
        }
        if(!this.interactiveMode){
            await this.options.close();
        }

    }
    
    help(commandName){
        function getArgs(command){
                
            var usageText=command.action.toString();
            var startIndex=usageText.indexOf('(');
            var endIndex=usageText.indexOf(")");
            usageText=usageText.substring(startIndex+1,endIndex);
            if(usageText)
                return usageText.replace(',',' ');
            else
                return '';
        }
      
        if(commandName){
            var command=this.commands[commandName];
           


            if(command){
                return `
                    About: ${command.primaryName}  ${getArgs(command)}
                    Aliases: ${command.aliases.join(',')}
                    Description: ${command.helpText}
                   
                `
            }
        } else{
            var helpText='Available commands:\n';
           
            
            for(var commandName in this.commands){
                
                var command=this.commands[commandName];
                if(!command.isPrimary)
                    continue;
                helpText+=`${command.primaryName} ${getArgs(command)}\t${command.helpText}\tAliases:${command.aliases.join(",")}\n`;
            }
            return helpText;
        }

       
    }

    async exit(){
        await this.options.close();
        process.exit(0);
    }

    clear(){
        console.clear();
    }
}

module.exports=CLI;