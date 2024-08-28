var person = {
    name: 'Vivek',
    getName: function () { return this.name }

}
class Printer {
    constructor(name) { this.name = name }

    print(what) { 
        
        console.log('Printing  ' ,  what()) 
    
    }

}

new Printer('Epson').print(person.getName)

new Printer('Epson').print(person.getName.bind(person));