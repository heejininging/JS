//for~in
var arr = [1,2,3,4,5];

for(var i in arr) {
    console.log(arr[i]); //배열의값
}

//객체에서는 키를 담는다.
var obj = {a : '1', b :'2'};
for( var i in obj ){
    console.log(i); //i는 key를 담는다. a,b
    console.log(obj[i]);//객체의 값
}