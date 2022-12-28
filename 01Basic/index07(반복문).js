//while문
var a = 1;
while (a <= 10) {
    console.log(a);
    a++;
}

//for문
for(var i = 1; i <= 10; i++){
    console.log(i);
}

//배열과 for문
var arr = [1,2,3,4,5];

for(var i = 0; i <= arr.length; i++){
    console.log( arr[i] );
}

//빈 배열을 하나 생성하고 1-10까지 값을 반복문으로 추가
var arr = [];
var num = 0;

var arr2 = [];

for(var i = 1; i <= 10; i++){
    arr[num] = i;
    num++;

    arr2.push(i);
}

console.log(arr);
console.log(arr2);

//구구단 2-9단 출력
for(var i = 2; i <=9; i++){
    for(var y = 1; y <=9; y++){
        console.log(i,'x', y, '=', i * y);
    }
}
