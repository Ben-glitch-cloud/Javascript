class Weather {
    constructor() { 

        this.arr = ["sun", "rain", "cloundy", "stormy", "snow"];
    
    }  

    randWeather() {
    
      return this.arr[Math.floor(Math.random()*this.arr.length)]; 

    } 
} 

let weather = new Weather 
