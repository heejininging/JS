// var a = function(){
//     console.log('a함수');
// }

// a();



// var b = function(x,y){
//     return x + y;
// }

// var result = b(1,3);
// console.log('b함수의 합 :' , result);

//익명함수로 변경해보기
function method1(x){
    if(x % 2 == 0){
        return '짝수';
    }else {
        return '홀수';
    }
}

var b = function(y){
    if(y % 2 == 0){
        return '짝수';
    }else {
        return '홀수';
    }
}
//or
var c = function(x){
    return x % 2 == 0? "짝수":"홀수";
}

//매개변수를 3개 받아서 평균을 반환하는 익명함수를 선언
var a = function(x,x1,x2){
    return (x+x1+x2)/3;
}
var result = a(1,2,3);

console.log(c(10));
console.log('a의 평균값 : ', result);

console.log('-------------------------------------------------');

//즉시실행함수
(function(){
    console.log('즉시실행');
})();

(function(x,y,z){
    console.log('즉시실행 : ',(x+y+z));
})(1,2,3);