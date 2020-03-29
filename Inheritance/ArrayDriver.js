"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Shape_1 = require("./Shape");
var Circle_1 = require("./Circle");
var Rectangle_1 = require("./Rectangle");
var myShape = new Shape_1.Shape(10, 20);
//console.log(myShape.getInfo());
var myCircle = new Circle_1.Circle(10, 10, 5);
//console.log(myCircle.getInfo());
var myRectangle = new Rectangle_1.Rectangle(5, 10, 12, 14);
//console.log(myRectangle.getInfo());
var shapes = [];
shapes.push(myShape);
shapes.push(myCircle);
shapes.push(myRectangle);
for (var _i = 0, shapes_1 = shapes; _i < shapes_1.length; _i++) {
    var shape = shapes_1[_i];
    console.log(shape.getInfo());
}
