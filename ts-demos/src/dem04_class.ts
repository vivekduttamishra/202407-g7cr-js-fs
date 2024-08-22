

namespace Demo04{

    class Point{
        constructor(private x:number,private y:number){}

        toString(){
            return `Point(${this.x}, ${this.y})`;
        }
    }

    var p1:Point=new Point(3,4);
    console.log('p1',p1);
    


    



    var p2:Point = {x:20, y:30};
    console.log('p2',p2);
    

}