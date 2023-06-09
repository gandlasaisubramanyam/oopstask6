//* Convert the UML diagram to javascript class(class-Circle)

class Circle{
    constructor(radius,color){
        this.radius = radius;
        this.color = color;
    }
    getRadius(){
        return this.radius;
    }
    getColor(){
        return this.color;
    }      
    getArea(){
        return (Math.PI * Math.pow(this.radius,2));
    }
    getCircumference(){
        return (2*Math.PI*this.radius);
    }
}  
var result = new Circle(1.0,"red");
console.log(result.getRadius().toFixed(2));  //* getradius=1.0

console.log(result.getColor());  //*getColor = red

console.log(result.getArea().toFixed(2));   //getarea = 3.14

console.log(result.getCircumference().toFixed(2));  // getcircumference = 6.28