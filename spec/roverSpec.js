describe('Mars Rover', function() {

    describe('THe rover must be able to be initialized with an initial location', function() {
            
        it('should set starting location for 04N', function() {
            var rover = new MarsRover(0,4,'N');
            expect(rover.location.x).toEqual(0);
        });
        it('should set starting location for 00N', function() {
            var rover = new MarsRover(0,0,'N');
            expect(rover.location.y).toEqual(0);
        });
    });

    describe('THe rovers should set and maintain a scuff  count', function() {
       
        var rover;

        beforeEach(function() {
             rover = new MarsRover(0,4,'N');
          });

        it('method incrementScuffCount should add 1 to scuff count', function() {    
            rover.incrementScuffCount();
            expect(rover.scuffs).toEqual(1);
        });
        it('method incrementScuffCount called twic  e should add 2 to scuff count', function() {            
            rover.incrementScuffCount();
            rover.incrementScuffCount();
            expect(rover.scuffs).toEqual(2);
        });

    });


    describe('The rover should be able to turn in any direction', function() {
        it('should be able to turn left', function() {
            var rover = new MarsRover(1,0,'N');
            rover.turnLeft();
            expect(rover.location.direction).toEqual('W');
        });
        it('should be able to turn right', function() {
            var rover = new MarsRover(1,0,'E');
            rover.turnRight();
            expect(rover.location.direction).toEqual('S');
        });
    });
   
    
    describe('The rover should be able to move in any direction', function() {
        it('should be able to move north', function() {
            var rover = new MarsRover(1,0,'N');
            rover.moveNorth();
            expect(rover.location.y).toEqual(1);
        });
        it('should be able to move south', function() {
            var rover = new MarsRover(0,4,'N');
            rover.moveSouth();
            expect(rover.location.y).toEqual(3);
        });
        it('should be able to move west', function() {
            var rover = new MarsRover(3,0,'N');
            rover.moveWest();
            expect(rover.location.x).toEqual(2);
        });
        it('should be able to move east', function() {
            var rover = new MarsRover(3,0,'N');
            rover.moveEast();
            expect(rover.location.x).toEqual(4);
        });
    });
   

    describe('The rover should be able to recieve a sequence of instructions', function() {
         it('should set commands array', function() {
             var rover = new MarsRover(0,0,'N');
              rover.commands = (['F', 'F', 'L', 'L', 'L', 'L']);
             expect(rover.commands).toEqual(['F', 'F', 'L', 'L', 'L', 'L']);
         });
     });

      describe('The rover should be able to implement a sequence of instructions', function() {
         it('comand F when facing north should increment Y coordinate by 1', function() {
             var rover = new MarsRover(0,0,'N');
              rover.commands = (['F']);
              rover.implementCommand();
             expect(rover.location.y).toEqual(1);
         });
         it('comand FF when facing north should increment Y coordinate by 2', function() {
            var rover = new MarsRover(0,0,'N');
             rover.commands = (['F','F']);
             rover.implementCommand();
            expect(rover.location.y).toEqual(2);
        });
        it('comand FRF when facing north  should increment Y coordinate by 1 and x coordinate by 1', function() {
            var rover = new MarsRover(0,0,'N');
             rover.commands = (['F','R','F']);
             rover.implementCommand();
            expect(rover.location.y).toEqual(1);
            expect(rover.location.y).toEqual(1);
        });
        it('comand LFLF when facing north should decrement Y coordinate by 1 and x coordinate by 1', function() {
            var rover = new MarsRover(4,4,'N');
             rover.commands = (['L','F','L','F']);
             rover.implementCommand();
            expect(rover.location.y).toEqual(3);
            expect(rover.location.y).toEqual(3);
        });

     });


     describe('The rover should be able to handle attempts to leave grid', function() {
        it('comand F when facing north at limit of grid should not increment Y coordinate and increment scuff count by 1', function() {
            var rover = new MarsRover(0,4,'N');
             rover.commands = (['F']);
             rover.implementCommand();
            expect(rover.location.y).toEqual(4);
            expect(rover.location.x).toEqual(0);
            expect(rover.location.direction).toEqual('N');
            expect(rover.scuffs).toEqual(1);
        });
        it('comand FFF when facing north with ycoordinate of 3  should not increment Y coordinate by 1 and increment scuff count by 2', function() {
            var rover = new MarsRover(0,3,'N');
             rover.commands = (['F','F','F']);
             rover.implementCommand();
            expect(rover.location.y).toEqual(4);
            expect(rover.location.x).toEqual(0);
            expect(rover.location.direction).toEqual('N');
            expect(rover.scuffs).toEqual(2);
        });
    });



    describe('Scenarios', function() {
        it('Scenario1', function() {
            var rover = new MarsRover(0,2,'E');
             rover.commands = (['F','L','F','R','F','F','F','R','F','F','R','R']);
             rover.implementCommand();
            expect(rover.location.y).toEqual(1);
            expect(rover.location.x).toEqual(4);
            expect(rover.location.direction).toEqual('N');
            expect(rover.scuffs).toEqual(0);
        });

        it('Scenario2', function() {
            var rover = new MarsRover(4,4,'S');
             rover.commands = (['L','F','L','L','F','F','L','F','F','F','R','F','F']);
             rover.implementCommand();
            expect(rover.location.y).toEqual(1);
            expect(rover.location.x).toEqual(0);
            expect(rover.location.direction).toEqual('W');
            expect(rover.scuffs).toEqual(1);
        });

        it('Scenario3', function() {
            var rover = new MarsRover(2,2,'W');
             rover.commands = (['F','L','F','L','F','L','F','R','F','R','F','R','F','R','F']);
             rover.implementCommand();
            expect(rover.location.y).toEqual(2);
            expect(rover.location.x).toEqual(2);
            expect(rover.location.direction).toEqual('N');
            expect(rover.scuffs).toEqual(0);
        });

        it('Scenario4', function() {
            var rover = new MarsRover(1,3,'N');
             rover.commands = (['F','F','L','F','F','L','F','F','F','F','F']);
             rover.implementCommand();
            expect(rover.location.y).toEqual(0);
            expect(rover.location.x).toEqual(0);
            expect(rover.location.direction).toEqual('S');
            expect(rover.scuffs).toEqual(3);
        });
    });

});