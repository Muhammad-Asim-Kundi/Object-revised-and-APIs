//Create a constructor with 4 properties and 3 methods
function Car (make, model , color, door){
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

toyota = new Car('toyota', 'prius-23' , 'silver' , 4)

tesla = new Car('tesla', 'X-2022' , 'white' , 2)

lomborghinie = new Car('lomborghinie' , ['R-20','A-23'] , 'red' , 2)