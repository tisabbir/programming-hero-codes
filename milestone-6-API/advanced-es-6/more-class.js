class Vehicle{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    start(){
        console.log('Gari chole na vhai')
    }
}

class Bus extends Vehicle{
    constructor(name, price,seat, ticketPrice){
        super(name, price);
        this.seat = seat;
        this.ticketPrice = ticketPrice;
    };

    end(){console.log('thaimma gece boss')}
}

const hanif = new Bus('Hanif', 20100000, 24, 140);
console.log(hanif);

hanif.end();
hanif.start();


class Truck extends Vehicle{
    constructor(name, price, load){
        super(name,price);
        this.load = load;
    }

    loader(){
        console.log('Gari load hoye gece');
    }
}


const A4truck = new Truck('A4Truck', 155550, '5TN');
A4truck.loader();