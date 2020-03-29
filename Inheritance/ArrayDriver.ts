import {Shape} from './Shape'
import {Circle} from './Circle'
import { Rectangle } from './Rectangle';

let myShape = new Shape(10,20);
//console.log(myShape.getInfo());

let myCircle = new Circle(10,10,5);
//console.log(myCircle.getInfo());

let myRectangle = new Rectangle(5,10,12,14);
//console.log(myRectangle.getInfo());

let shapes: Shape[] = [];

shapes.push(myShape);
shapes.push(myCircle);
shapes.push(myRectangle);

for(let shape of shapes){
    console.log(shape.getInfo());
}