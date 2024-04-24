class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
        setWidth (width) {
            this.width = width;
        }
        setHeight (height) {
            this.height = height;
        }
        getWidth() {
            return this.width;
        }
        getHeight() {
            return this.height;
        }
        getPerimeter() {
            return (this.width + this.height) * 2;
        }
        getArea(){
            return this.width * this.height;
        }

}
let rectangle1 = new Rectangle(60, 40);
let area1 = rectangle1.getArea();
let perimeter1 = rectangle1.getPerimeter()
document.writeln("dien tich HCN: " + area1 +"<br>");
document.writeln("chu vi HCN: " + perimeter1 +"<br>");
rectangle1.setHeight(50);
rectangle1.setWidth(60);
let area2 = rectangle1.getArea();
document.writeln("dien tich HCN sau thay doi: " + area2 +"<br>");

let rec = document.getElementById("canvas")
let ctx = rec.getContext("2d");
ctx.fillStyle = "#fa4b2a";
ctx.fillRect(10,10,rectangle1.getWidth(),rectangle1.getHeight());