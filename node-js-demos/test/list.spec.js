var { expect, should } = require('chai');
var { List } = require('../src/list-tdd');
should();
require('mocha');



describe('Linked List Specs', () => {

    var  list;
    beforeEach(() => {
        list = new List();
    });
    describe('Initial Setup', () => {
        it('should be a List object', () => {
            //var list = new List();
            expect(list).to.be.instanceOf(List);
        });

        it('isEmpty() should be true', () => {
            //expect.fail('Not Yet Implemented');
            //var list=new List();
            list.isEmpty().should.be.true;
        })

        it('size() should be 0', () => {
            //expect.fail('Not Yet Implemented');
            list.size().should.equal(0);
        })

        it('toString() should returun "LinkedList"', () => {
            list.toString().should.contain('LinkedList');
        })
    });


    describe('Append', () => {
        it('should append an item to a list', () => {
            list.append('item');
        });

        it('should increase the list size', () => {
            list.append('item');
            list.size().should.equal(1);
        })
        it('should make list not empty', () => {
            list.append('item');
            list.isEmpty().should.be.false;
        })

        it('should append all item to the end of list', () => {
            list.append('item');

            list._last.should.equal('item');
        })

        

        it('toString() should returun include appended item', () => {
            list.append('item');
            list.toString().should.contain('item');
        })
    });


    describe('get', () => {
        
        it('should return first item with get(0)',()=>{
            list.append('item');
            list.get(0).should.equal('item');
        });

        it('should return last item with get(-1)',()=>{
            list.append('item');
            list.get(-1).should.equal('item');
        });

        it('should throw exception on invalid index', () => {

            list.append('item');

            expect(()=>list.get(2)).to.throw();
             
            
        })

        it('should include index in the invalid exception', () => {
            var index=20;

            expect(()=>list.get(index)).to.throw(`${index}`);

        })
        it('should get all items from valid index', () => {
            for(var i=0;i<data.length;i++){
                expect(list.get(i)).to.equal(data[i]);
            }
        });
    });


});
