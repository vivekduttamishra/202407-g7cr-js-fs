var {LinkedList} = require('../src/list');
var assert = require('assert');



describe('Linked List', function(){

    describe('When Empty', function(){

        it('should be empty intially',()=>{
           var list = new LinkedList();
           assert.equal(list.isEmpty(),true);
        });
    
        it('should have size()=0 ',()=>{
            var list = new LinkedList();
            assert.equal(list.size(),0);
        })
    });

    describe('on append',function(){

        it('should have size()=1',()=>{
            var list=new LinkedList();
            list.append(1);
    
            assert.equal(list.size(),1);
        })
    })

});


