var num1 = 1;
if(num1 >= 10){
    console.log('10보다 큼');
}else {
    console.log('10보다 작음');
}

//정수로의 형변환 parseInt(값), 실수로의 형변환 parseFloat(값)
var a = parseInt(Math.random() * 101);

console.log(a);
if(a >= 90){
    console.log('90이상입니다.');
}

var b = '가';
switch (b) {
    case '가':
        console.log('가 입니다.');
        break;
    case '나':
        console.log('나 입니다.');
        break;

    default:
        break;
}
