//basic func
let add1 = function(x,y){
    return x + y;
    
}


//basic arrow func
let add2 = (x,y) => {return x+y;};

//arrow func w/o block or return
let add3 = (x,y) => x+y;

//so:     => expression is equivalent to => { return expression; }

//arrow function can have no input: () => { return "hello world"; }
//arrow function can be passed as input to another function, i.e. callback
let arr = [1,2,3,4,5,6,7,8,9,10]
let answer = arr.reduce(add3)
