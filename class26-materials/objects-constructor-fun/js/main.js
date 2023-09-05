//Create a constructor with 4 properties and 3 methods
function MakeCar (make, model , color, door){
    this.make= make
    this.model = model
    this.color = color
    this.door = door

    this.driveType = function(){
        alert(`we can drive ${this.make} without a driver`)
    }

    this.speed= function(){
        alert(`${this.make} ${this.model} can go up to 260kmh`)
    }
    
    this.fuelAverage = function(){
        alert(`${this.make} has ${this.door} doors and ${this.color} color is giving me good fuelAverage of 20km/L`)
    }

}

let toyota = new MakeCar('toyota', 'prius-23' , 'silver' , 4)

let tesla = new MakeCar('tesla', 'X-2022' , 'white' , 2)

let lomborghinie = new MakeCar('lomborghinie' , ['R-20','A-23'] , 'red' , 2)


// the new look or the new syntax 


class Car{
    constructor(make, model , color, door){
        this.make= make
        this.model = model
        this.color = color
        this.door = door 
    }

    driveType(){
        alert(`we can drive ${this.make} without a driver`)
    }

    speed(){
        alert(`${this.make} ${this.model} can go up to 260kmh`)
    }

    fuelAverage(){
        alert(`${this.make} has ${this.door} doors and ${this.color} color is giving me good fuelAverage of 20km/L`)
    }
}

let honda = new MakeCar('Honda', 'Civic-23' , 'Black' , 4)