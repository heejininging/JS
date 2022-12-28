var num1 = 50; //전역변수
if(true){
    var num2 = 100; //전역취급
}

console.log(num2); //100


var num3 = 100; //전역변수
function add(){
    var num4 = 200; //지역변수
}

// console.log(num4); // num4 is not defined





//es6 - 1et변수, 중괄호스코프 (변수의 중복선언 x)

let x1 = 100;
if(ture){
    let x2 = 200; //지역변수
}
// console.log(x2); // ture is not defined

let x3 = 100; //전역변수
function add2(){
    let x4 = 200; //지역변수
}

// console.log(x4); // ture is not defined