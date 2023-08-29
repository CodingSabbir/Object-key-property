const student={
    id:100,
    name:'sohan',
    city:'bogura',
    getFullName:function(){
     return this.name

    },
};

const userObj={
    name:'balam',
    id:255,
};
const heroObject={
    name:'kalam',
    id:255,
};
// console.log(student.getFullName())
userObj.getFullName=student.getFullName;
heroObject.getFullName=student.getFullName;

console.log(userObj.getFullName())
console.log(heroObject.getFullName())

const heroMan={
    name:'biddut',
}

function add(a,b){
    console.log(this)
    return a+b
}
add(10,10); // er bame keo nai tai aita windows return korbe
heroMan.sum=add;
heroMan.sum()