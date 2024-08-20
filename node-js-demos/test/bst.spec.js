var {expect,should} =require('chai');


describe('Binary Search Tree',function(){

    var tree;

    //arange
    beforeEach(function(){
        tree = new BinarySearchTree();
    });


    describe('Initial Setup', function(){

        it('should take a default comparer function to build tree ', function(){
            tree=new BinarySearchTree();
            expect(typeof tree.comparer).toBe('function');
        })

        if('should take a comparer function as an argument to constructor', function(){
            var fn=()=>{};

            tree = new BinarySearchTree(fn);
            expect(tree.comparer).toBe(fn);
        })

        it('should take a comparer that returns bool',function(){
            expect(tree.comparer(1,2)).to.be.true;
        });
    

        it('should create an empty tree',function(){
            expect(tree.isEmpty()).toBe(true);
        })

        it('should have size() 0', function(){
            tree.size().should.equal(0);
        })

        it('should have undefined root', function(){
            expect(tree._root).to.be.undefined;
        });
    });

    describe('insert', function(){
        it('should insert first item to tree root',function(){
            //arrange
            //act
            tree.insert(20);

            //assert
            tree._root.value.should.equal(20);
            expect(tree.size()).to.equal(1);

        });

        it('should insert smaller item to left of root', function(){
            //arrange
            tree.insert(20);

            //act
            tree.insert(10);

            //assert
            expect(tree._root.left.value).to.equal(10);
            expect(tree.size()).to.equal(2);
        })
        it('should insert larger item to right of root', function(){
            //arrange
            tree.insert(20);

            //act
            tree.insert(30);

            //assert
            expect(tree._root.right.value).to.equal(30);
            expect(tree.size()).to.equal(2);
        })

        it('should not insert duplicate value',function(){
            //arrange
            tree.insert(20);

            //act
            tree.insert(20);

            //assert
            expect(tree.size()).to.equal(1);
        })
    });

    describe('traversal',function(){
        //arrange
        const testData=[15, 8, 6, 4, 7, 2, 1, 3, 20, 18, 25, 22, 30, 16, 19, 17];
        beforeEach(function(){
            tree.insert(...testData);
        });

        describe('inorder',function(){

            it('should receive each item one by one', function(){
    
                //act
                let size=0;
                tree.inorder(v=>{
                    size++;
                });
    
                //assert
                size.should.equal(testData.length);
            });
    
            it('should receive each item in ascending order', function(){
                //arrange
                var last;

                
    
                //act
                tree.inorder(v=>{
                    if(last){
                        expect(v).to.be.greaterThan(last);
                    }
                    last=v;
                })
                //assert
            });
        });
        
    })

})