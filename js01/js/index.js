function Car(name, color, year, mark) {
    this.name = name;
    this.color = color;
    this.year = year;
    this.mark = mark;

    this.sound = function () {
        return ('Beep Beep');
    }
    this.getName = function () {
        return (this.name);
    }
    return this;
}

let myCar = new Car ('BMW', 'black', 2010, 'M3');

console.log(myCar.getName() + ' ' + myCar.sound());
