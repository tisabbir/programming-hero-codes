class vehicle{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    start(){
        console.log('Gari chole na vhai')
    }
}

class Bus extends vehicle{
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