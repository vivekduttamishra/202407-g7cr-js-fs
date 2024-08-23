
const { info } = require('console');
var stream = require('stream');


class DelayedStream extends stream.Readable {
    constructor(generator, delay = 1, bufferBuilder=null, options) {
        super(options);
        //this._generator = generator;
        this._delay = delay;
        this._iterator=generator();
        this._bufferBuilder= bufferBuilder ;
        if(!bufferBuilder){
            this._bufferBuilder = data=>data.toString();
        }
    }

    _read() { 
        
        const iid = setInterval(() => {

            var _next = this._iterator.next();
            if (_next.done) {
                clearInterval(iid);
                this.push(null); // emit 'end'
            } else {
                this.push(this._bufferBuilder(_next.value));
                //this.emit('data', this._bufferBuilder(_next.value));
                //console.log('_next', _next);
            }
        }, this._delay);

    }
}

class Middleware extends stream.Transform{

        constructor(tranformer, options){
            super(options);
            this._transformer = tranformer;
        }

        _transform(chunk, encoding, callback){
            try {
                let result = this._transformer(chunk.toString(),encoding);
                //console.log('chunk', chunk.toString(),'result [',result,"]");
                
                if(result!==undefined){
                    this.push(result); //emit 'data'
                }
                callback();        //emit 'drain'
            } catch (err) {
                callback(err); //emit 'error'
            }
        }


}

class Collector extends stream.Writable{
    constructor(container,formatter,options){
        super(options);
        if(Array.isArray(container)){
            this._container = (v)=> container.push(v);
        } else{
            this._container= container; //expected to be a  function.
        }

        if(formatter)
            this._formatter = formatter;
        else
            this._formatter = x=>x.toString();
    }

    _write(chunk, encoding, callback){
        this._container(this._formatter(chunk)); //I saved incoming data
        callback(); //emit 'drain'
    }
}

function filter(filter,converter){
    return new Middleware(
        v=>{
            if(converter)
                v=converter(v);
            if(filter(v))
                return v;
            else
                return undefined;
        }
    );
}

function map(mapper,opt={}){
   
    var defaultFormatters={
        inFormatter: v=>v.toString(),
        outFormmater: v=>v.toString()
    }

    var opt={
        ...defaultFormatters,
        ...opt        
    };

    
    return new Middleware(
        v=>opt.outFormmater(mapper(opt.inFormatter(v)))
    );
}



module.exports = {
    DelayedStream,
    Middleware,
    p: (tranformer)=> new Middleware(tranformer),
    Collector,
    filter,
    map
};