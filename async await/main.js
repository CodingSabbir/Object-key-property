// function loadData(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(data =>{
//         displayData(data)
//     })
// }
// loadData()

// const myList= document.getElementById('userName');
// function displayData(info){
//     info.map((userData)=>{
//         userData.name
//      const li=   document.createElement('li');
//      li.innerText=userData.name
//      myList.appendChild(li)
//     })
// }


// async function hello(){
//     return 'Hello World'
// }
// const greant=hello()
// console.log(greant);

// greant.then(res =>{
//     console.log(res)
// });


const data= async()=>{
const response= await  fetch('https://jsonplaceholder.typicode.com/users')
const data=await response.json();
loadData(data)
}
data()
function loadData(dataInfo){
 const ul= document.getElementById('userName')
    dataInfo.map((userInfo)=>{
    userInfo.name
    const li=document.createElement('li')
    li.innerText=userInfo.name
    ul.appendChild(li)

    })
}