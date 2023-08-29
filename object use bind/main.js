const user={
    name:'sabbir',
    address:'bogura',
    phone:122455,
    salary:7000,
    getFullName: function(){
       return `${this.name} ${this.address}`
    },
    chargeBill:function(amount){
      const total= this.salary-amount
      return total
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

const changeBill=user.chargeBill.bind(heroUser);
console.log(changeBill(500))

