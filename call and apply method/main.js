const user={
    name:'sabbir',
    address:'bogura',
    phone:122455,
    salary:7000,
    getFullName: function(){
       return `${this.name} ${this.address}`
    },
    chargeBill:function(amount,tax){
      this.salary=this.salary-amount-tax
    return  this.salary
    }
};


const heroUser={
    name:'rakib',
    id:2010,
    salary:5000,
};


const localUser={
    name:'dev',
    id:664,
    salary:10000,
};


user.chargeBill.call(heroUser,4000,20);
console.log(heroUser.salary);


user.chargeBill.apply(localUser,[1000,20]);
console.log(localUser.salary);


// const student={
//     id:100,
//     name:'sohan',
//     city:'bogura',
//     getFullName:function( city){
//      return this.name+","+city

//     },
// };



// const user={
//     name:'balam',
//     id:255,
// };

// console.log(student.getFullName.apply(user,['bogura']))