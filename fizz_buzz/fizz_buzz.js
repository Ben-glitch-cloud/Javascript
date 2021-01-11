function fizz_buzz(num) {
    while (num < 100) { 
        num += 1   
        // num++ <-- this is the same as num += 1

        if (num % 3 == 0 && num % 5 == 0) {
            console.log("FizzBuzz"); } 

        else if (num % 3 == 0) {
            console.log("Fizz"); }  

        else if (num % 5 == 0) {
            console.log("buzz"); }  

        else { 
            
        console.log(num); 

        }
        
    } 

} 

fizz_buzz(1); 

