
//객체의 표현 {}
var person = {name: 'hong', age:20, info:[1,2,3]};
console.log(person);

//객체의 접근방법이 2개입니다.

//첫번째, .으로 접근
console.log(person.name);
console.log(person.age);
console.log(person.info);

//두번째, 키를 이용한 접근 (이름[키])
console.log(person['name']);
console.log(person['age']);
console.log(person['info']);

//객체안에 객체
var exam = {kor:10, eng:20};
var kim = {name:'김길동', exam : exam};

console.log(kim);

//kim이 가지고있는 kor값의 사용
console.log(kim.exam.kor);
console.log(kim['exam']['kor']);
console.log(kim.exam['kor']);