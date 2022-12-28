//렉시칼스코프 - 함수의 선언위치에 따라서 상위 스코프를 결정하게 된다.

/*
var a = 1;

function x(){
    a = 10;
    console.log(a); //10
}

x();

var b = 1;
function y(){
    var b = 10;
    z();
}

function z(){
    console.log(b);
}

y(); //실행
*/

//클로저
function func1(){
    var a = 1; //지역변수

    //내부함수 생성방법
    
    //첫번째,
    // var b = function(){
    //     return a;
    // }
    // return b;
    
    //두번째,
    return function(){
        return a;
    }

} //a의 최대사용범위 : 함수바깥에서 사용할 수 있는 방법은 없다. 하지만 내부함수를 생성해서 값을 꺼낼 수 있다.

// console.log(a); //error
var result = func1(); //result 는 내부함수
var x = result();
console.log(x); //x는 a의 값

console.log('------------------------------------------');

//클로저가 아닌 상황
/*
function compute(){
    var count = 0;
    return ++count;
}

console.log ( compute() ); //1
console.log ( compute() ); //1
*/

//클로저 환경
function compute(){
    var count = 0; //private변수
    return function(){
        return ++count;
    }
}

var result2 = compute(); //result2는 내부함수
console.log(result2()); //1
console.log(result2()); //2
console.log(result2()); //3