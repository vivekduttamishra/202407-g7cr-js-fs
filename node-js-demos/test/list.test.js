var {LinkedList,Node} = require('../src/list');
var assert = require('assert');
var {take} =require('../src/matchers');

var {hasInjector} = require('../src/has');

hasInjector();

var {expect,should}=require('chai');

should();


describe('Linked List', function(){
    var list ;

    beforeEach(function(){
            list = new LinkedList();
    });

    describe('When Empty', function(){

        it('should be empty intially',()=>{
           //var list = new LinkedList();
           //assert.equal(true,list.isEmpty());

           //expect(list.isEmpty()).to.be.equal(true);

           list.isEmpty().should.be.true;
        
        });
    
        it('should have size()=0 ',()=>{
            //var list = new LinkedList();
            //assert.equal(list.size(),0);

            //expect(list.size()).to.equal(0);

            list.size().should.be.equal(0);

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

    describe('filter',function(){
        beforeEach(()=>{
            for(var i=0;i<100;i++){
                list.append(i);
            }
        });

        it('should take first 3 items with take(3)',()=>{

            var matcher= take(3);

            //same matcher function is called for multiple times.
            var result = list.filter(matcher);

            expect(result.size()).to.equal(3);
            for(var i=0;i<3;i++){
                expect(result.get(i)).to.be.equal(list.get(i));
            }

        });

        it('should return a list of  all values for true filter',()=>{
            
            list.filter(_=>true).should.be.instanceOf(LinkedList);

            
        })

        it('should find all books by author',()=>{
            var book={title:'The Accursed God', author:'Vivek Dutta Mishra'};
            
            console.log("book.property('author')",book.property('author'));
            book.property('author').should.includes('Vivek');
            book.type().should.equal('Object');
        });
    });

});


