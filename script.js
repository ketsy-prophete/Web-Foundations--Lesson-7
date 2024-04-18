class Animal {
    constructor(animalName, animalFood) {
        this.speed = 0;
        this.food = animalFood;
        this.name = animalName;
    }
}


class Rabbit extends Animal {
    constructor(name, food, speed, animal) {
        super(name, food);
        this.speed = speed;
        this.animal = animal;
    }
    hide() {
        alert(`This is ${this.name} the ${this.animal}. Clocking in at a speed of ${this.speed} miles per hour while eating ${this.food}. Congratulations ${this.name}.`);
    }
}
let bunny = new Rabbit("Jumpy", "carrots", 20, "rabbit");
bunny.hide();


class Cow extends Animal {
    constructor(name, food, speed, animal) {
        super(name, food);
        this.speed = speed;
        this.animal = animal;
    }
    moo() {
        alert(`This is ${this.name} the ${this.animal}. Clocking in at a speed of ${this.speed} miles per hour while eating ${this.food}. Congratulations ${this.name}.`);
    }
}
let cattle = new Cow("Moody", "grass", 10, "cow");
cattle.moo();


class Alligator extends Animal {
    constructor(name, food, speed, animal) {
        super(name, food);
        this.speed = speed;
        this.animal = animal;
    }

    eat() {
        alert(`This is ${this.name} the ${this.animal}. Clocking in at a speed of ${this.speed} miles per hour while eating ${this.food}. Congratulations ${this.name}.`);
    }
}
let reptile = new Alligator("Snapper", "fish", 5, "alligator");
reptile.eat();


class Sloth extends Animal {
    constructor(name, food, speed, animal) {
        super(name, food);
        this.speed = speed;
        this.animal = animal;
    }

    sleep() {
        alert(`This is ${this.name} the ${this.animal}. Clocking in at a speed of ${this.speed} miles per hour while eating ${this.food}. Congratulations ${this.name}.`);
    }
}

let mammal = new Sloth("Flash", "marshmallows", 0.5, "sloth");
mammal.sleep();