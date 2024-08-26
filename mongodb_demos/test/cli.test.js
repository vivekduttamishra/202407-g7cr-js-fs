var {expect,should} = require('chai');
var CLI = require('../src/cli');

should();

describe('CLI', function(){
    var cli;
    beforeEach(function(){
        cli=new CLI();
    });


    it('should start with basic commands help, exit and clear',function(){

        expect(cli.commands.help).to.be.not.undefined;
        expect(cli.commands.exit).to.be.not.undefined;
        expect(cli.commands.clear).to.be.not.undefined;
    });

    it('should accept a new named function as a command', function(){
        function myCommand(){};

        cli.addCommand(myCommand);

        expect(cli.commands.myCommand).to.not.be.undefined;

    });

    it('should fail with with exception if command doesnt have name',function(){
        expect(()=> cli.addCommand(()=>{})).to.throw('No command name found');
    });

    it('should also identify the commands based on alias',function(){
        expect(cli.commands['?']).to.be.not.undefined;
    });

})