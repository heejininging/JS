function obj(){
    var name = "홍길동";

    //get
    // return function() {
    //     return name;
    // }

    //set
    // return function(aaa){
    //     name =aaa;
    //     console.log(name);
    // }

    return{
        getName : function(){
            return name;
        },
        setName : function(aaa){
            name = aaa;
        }
    }


}

// var get = obj();
// console.log(get());

// var setObj = obj();
// setObj("이순신");

var result = obj();
result.setName("이순신");
console.log( result.getName() );