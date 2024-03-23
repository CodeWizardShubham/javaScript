//# Primitive Datatypes : 7 
// --> String , Number , Boolean, Null, Undefined , Symbol, BigInt 

const abc = 123
const name = "shubham"
const islogedIn = false 

const setTemp = null
let emailId = undefined; // let emailID (Both are same in meaning)
const n = 276736166876783n
const houseId = Symbol(1234)
const anotherId = Symbol(1234)

console.log(houseId == anotherId);


// #Reference Type (Non- Premitive Datatype)
// --> Array , Object , Function 

const names = ["shubham","Singh","Rajput"];

let obj = {
    name : "Shubham",
    mobile_no: 989899389,

}
const myfunction = function(){
console.log("Hello World");
}
console.log(typeof emailId );