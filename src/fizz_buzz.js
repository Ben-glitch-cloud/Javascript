class Fizzbuzz {

 play(num) {
    while (num < 100) { 
        // num++ <-- this is the same as num += 1

        if (num % 3 == 0 && num % 5 == 0) {
            return "FizzBuzz"; } 

        else if (num % 3 == 0) {
            return "Fizz"; }  

        else if (num % 5 == 0) {
            return "Buzz"; }  

        else { 
            
            return num; 

        }
        num += 1 
    } 

} 

}
//fizz_buzz(1); 

