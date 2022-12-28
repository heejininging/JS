function func1(x,y){
    // arguments키워드를 이용해서 매개변수를 찾아서 사용할 수 있습니다.
    console.log('매개변수의 길이 : ', arguments.length);
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    console.log(arguments[3]);


    return x+y;
}

//매개변수 자체는 큰 의미가 없다. 단순히, 사용할 값에 이름을 붙이는 형태이다.
console.log( func1(1) ); //NaN
console.log( func1(1,2) ); //3
console.log( func1(1,2,3,4,5) ); //3