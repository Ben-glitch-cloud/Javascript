describe('Fizzbuzz', function() {

    var fizzbuzz

    beforeEach(function() {
        fizzbuzz = new Fizzbuzz();
    });

    describe('multiples of 3', function() {
        it('fizzes for 3', function() {
            expect(fizzbuzz.play(3)).toEqual('Fizz');
        });
    });

    describe('mutiples of 5', function() {
        it('buzzes for 5', function() {
            expect(fizzbuzz.play(5)).toEqual('Buzz');
        });
    });

    describe('mutiples of 3 and 5', function() {
        it('fizzbuzzes for 3 and 5', function() {
            expect(fizzbuzz.play(15)).toEqual('FizzBuzz');
        });
    });

    describe('other numbers will just be returned', function() {
        it('returns numbers', function() {
            expect(fizzbuzz.play(11)).toEqual(11);
            expect(fizzbuzz.play(44)).toEqual(44);
        });
    });

});
