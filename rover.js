
class MarsRover {
    constructor(x,y,direction) {
          
        this.location = {
        x,
        y,
        direction
      };
          
        this._scuffs=0;
        this._commands = [];

    }

    static staticLimit = 4;
  
    get scuffs(){
      return this._scuffs;
    }

     get commands() {
        return this._commands;
     }
    
    set commands(val) {
        this._commands = val;
      }

    incrementScuffCount(){
      this._scuffs++;  
    }
  
    setCommands(commands){
        this.commands = commands;
    }

    implementCommand(){
      this._commands.forEach(char => { 
        switch(char) {
          case 'F':
            this.implementForward();
          break;
          case 'L':
            this.turnLeft();
          break;
          case 'R':
          this.turnRight();
          break;       
          default:         
        }
      }); 
    }


    implementForward(){
        switch(this.location.direction) {
          case 'N':
            this.moveNorth();
            break;
          case 'W':
            this.moveWest();
            break; 
          case 'E':
            this.moveEast();
            break;       
          case 'S':
            this.moveSouth();
            break;       
          default:
        }
    }


    turnRight(){
      switch(this.location.direction){
        case 'N':
          this.location.direction = 'E';
          break;
        case 'E':
          this.location.direction = 'S';
          break;
        case 'S':
          this.location.direction = 'W';
          break;
        case 'W':
          this.location.direction = 'N';
          break;
        default:
      }
    }

    turnLeft(){
      switch(this.location.direction){
        case 'N':
          this.location.direction = 'W';
          break;
        case 'E':
          this.location.direction = 'N';
          break;
        case 'S':
          this.location.direction = 'E';
          break;
        case 'W':
          this.location.direction = 'S';
          break;
        default:
      }
    }


    moveNorth() {
      if(this.location.y <  MarsRover.staticLimit){
        this.location.y++;
      } 
      else{
        this._scuffs++;
      }
      this.reportLocation();
    }

    moveSouth() {
      if(this.location.y > 0){
        this.location.y--;
      } 
      else{
        this._scuffs++;
      }
      this.reportLocation();    
    }

    moveEast() {
      if(this.location.x < MarsRover.staticLimit){
        this.location.x++;
      } 
      else{
        this._scuffs++;
      }    
      this.reportLocation();
    }

    moveWest() {
      if(this.location.x > 0){
        this.location.x--;
      } 
      else{
        this._scuffs++;
      }    
      this.reportLocation();    
  }

  reportLocation(){
    console.log(`Current location ${this.location.x}, ${this.location.y},${this.location.direction}`);  
  }

}
