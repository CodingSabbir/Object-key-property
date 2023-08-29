class Person{
    constructor(firstName,lastName,salary){
        this.firstName=firstName
        this.lastName=lastName;
        this.salary=salary;

    }
}
const heroPerson=new Person('sabbir' ,'rahman',10000);
const freePerson=new Person('kalam' ,'sarkar',50000);
console.log(heroPerson)
console.log(freePerson)


function Product(productName,productPrice,productQuntity){
    this.productName=productName
    this.productPrice=productPrice
    this.productQuntity=productQuntity
}
const productInfo=new Product('mango',20,5)
console.log(productInfo)