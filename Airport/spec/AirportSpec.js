describe('Aiport', function() { 

    var aiport 

    beforeEach(function() {
        airport = new Aiport();
    });

    describe("A runway", function() {
        it("this contain an empty array", function() { 
            expect(airport.runway).toEqual([]);
        });
    }); 
});



/