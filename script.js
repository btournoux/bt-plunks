
      var scope = "global";
      
      function testScope(){
        var scope="local";
        function innerFunc() { return scope; }
        return innerFunc();
      }
      
      var answer  = testScope();
      output.innerHTML = answer;
      //alert("hi - answer is: " + answer);
      //output.innerHTML = answer;
      
     /* 
      var constant = 32;
      
      function celsiusToFarenheit(temperature){
        var f = temperature * 9 / 5 + constant;
        return f;
      }
    
      output.innerHTML = celciusToFarenheit(100);
    */
   
    /*
    var animal = "dog";
    
    switch( animal){
      
      case "cat":
        alert("meow");
        break;
        
        case "dog":
          alert("woof");
          break;
          
          default:
          alert("no match");
          break;
    }
    */
      
 
