// 배열에 객체가 들어있는 형태
var data = [
    {id: 'aaa123', title: 'aaa', content: 'a...'},
    {id: 'bbb123', title: 'bbb', content: 'b...'},
    {id: 'ccc123', title: 'ccc', content: 'c...'}
    
];

// console.log(data);

// 다른서버와 통신할 때 이 상태로 내보낼 수 없기 때문에 문자열로 형변환을 시켜준다.
var str = JSON.stringify(data);
console.log(str);

//위에 변경한 문자열을 다시 객체로 변환시키기
var obj = JSON.parse(str);
console.log(obj);

//단, 문자열을 객체로 변경할 때는 엄격한 규칙이 있다.
var result = JSON.parse('{"id": "aaa123"}');
console.log(result);