func1();//호이스팅 (선언적함수에서 가능)
var result = func2(); //함수의 리턴값
var result2 = func3(1,2,3);

console.log(result2);

function func1(){
    console.log('실행');
}

function func2(){
    console.log('실행2');
    return '2반환';
}

function func3(a,b,c){
    console.log('실행3');
    return a+b+c;
}

//함수를 변수에 저장할 수 있다.
var a = func1;
console.log(a); //[Function: func1]
a();
