//"apple ban" --> ["apple 5", "ban 3"]
//"you will win" -->["you 3", "will 4", "win 3"]

/*const word = "apple ban";
function addLength(strwords) {
    const words = "apple ban";
    console.log(words);
    //start-here
    }-*/
    console.clear();
    function nameLength(str) {
        const words = str.split(" ");
        return words.map(str => `${str} ${str.length}`);
    }
    
    function nameWithIndex(str){
        const words = str.split(" ");
        return words.map((string, index) => `${index}. ${string}`);
      }
    
    console.log(nameLength("my name is Kate"));
  
    console.clear();

    function makeNegative(num) {
        if(num > 0)
        {return `${-num}`;}
        else {
          return (num);
        }
      }

      console.log(makeNegative(5))
      console.log(makeNegative(1))
      console.log(makeNegative(-9))
      console.log(makeNegative(0))

      console.clear();

    console.log('--------------------------');

    function removeChar(str){
        let du = str.slice(1, -1);
        return du;
        };
        console.log(removeChar('labukas'));

        function booleanToString(b){
          if (b === true) {console.log('true')}
            else{
              console.log('false');
            }
          }
         console.log(booleanToString(true));

         console.log('---------------------------');
      
       console.log('---------------------------');
       function createArray(number){
        var newArray = [];
        
        for(var counter = 1; counter <= number;){
          newArray.push(counter);
        }
        
        return newArray;
      }