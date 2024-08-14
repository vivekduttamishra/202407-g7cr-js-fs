var {LinkedList,Node} = require('../src/list');
var assert = require('assert');

var {expect}=require('chai');



describe('Linked List', function(){
    var list ;

    beforeEach(function(){
            list = new LinkedList();
    });

    describe('When Empty', function(){

        it('should be empty intially',()=>{
           //var list = new LinkedList();
           //assert.equal(true,list.isEmpty());

           expect(list.isEmpty()).to.be.equal(true);
        
        });
    
        it('should have size()=0 ',()=>{
            //var list = new LinkedList();
            //assert.equal(list.size(),0);

            expect(list.size()).to.equal(0);

        })

        it('should have null for first item',()=>{
            //var list=new LinkedList();
            expect(list._first).to.be.null;
        }); 

    });

    describe('on append',function(){

        describe('in empty list', function(){
            it('should have size()=1',()=>{
                //var list=new LinkedList();
                list.append(1);
        
                assert.equal(list.size(),1);
            })
    
            it('should add multiple values at once',()=>{
                list.append(1,2,3,4);
                expect(list.size()).to.equal(4);
            });
    
            it('should add the node as the first item',()=>{
                var value =1;
                list.append(value);
    
                expect(list._first.value).to.equal(value);
            });

            it('should add a node object',()=>{
                list.append(1);

                expect(list._first).to.be.an.instanceOf(Node);
            });
        })

        
    })

    describe('get',function(){
        var size;
        var data=[2,3,9,5,1];
        beforeEach(function(){
            list.append(...data);
            size=list.size();
        });

        it('should return valid value for all valid index',function(){
            for(var i=0;i<data.length;i++){
                expect(list.get(i)).to.be.equal(data[i]);
            }
        });
    });

});


