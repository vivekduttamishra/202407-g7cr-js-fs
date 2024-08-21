var {LinkedList} = require('./list');

//import LinkedList from './list';


(
    function(){
        
        LinkedList.prototype._removeIndex=LinkedList.prototype.remove;

        LinkedList.prototype._removeSelected=function(matcher){
            var removed=new LinkedList();

            var p=null;
            for(var i=0; i<this.size();i++){
                var v=this.get(i);
                console.log(i,v);
                
                var _matched= matcher(v);
                if(_matched===undefined)
                    break;
                if(_matched){
                    console.log('removing ',v);
                    removed.append(v);
                    this._removeIndex(i);
                    i--;
                };
            }
            return removed;
        };

        LinkedList.prototype.remove=function(param){
            if(typeof(param)==='function')
                return this._removeSelected(param);
            else
                return this._removeIndex(param);
        }

        LinkedList.prototype.filteredList = LinkedList.prototype.filter;

        LinkedList.prototype.filter = function*(matcher){
            var index=0;
            for(var node=this._first; node; node=node.next){
                var matched=matcher(node.value,index++);
                if(matched===undefined)
                    return; //generator completes.
                if(matched)
                    yield node.value;
            }
        }

        LinkedList.prototype.mappedList = LinkedList.prototype.map;
        LinkedList.prototype.map= function*(selector){
            var index=0;
            for(var node=this._first; node; node=node.next)
                yield selector(node.value,index++);
        }

        LinkedList.prototype.each= function*(){
            for(var node=this._first;node;node=node.next)
                yield node.value;
        }

    }
)();

