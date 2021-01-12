require('./Weather');

class Airport {  

    constructor() {

    this.runway = []
    
    this.plane = "plane" 

    } 
    
    land_plane() {

    this.runway.push(this.plane)  

    console.log(airport.runway) 

    } 

    take_off() {

    this.runway.shift()
    
    console.log(airport.runway)

    }  


}  

let airport = new Airport 




//console.log(aiport.plane); 
//console.log(aiport.runway)

//console.log(aiport.runway) 
//console.log(aiport.plane)
