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
console.log(user.getFullName());

const result=user.chargeBill(100);
console.log(result)