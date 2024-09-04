export {};

let na="raj nakrani";
console.log(na)

let name:string="ravi nakrani"; //define only string
let age:number=20; //define only number
let address:any=20+"1002"; //define any data ,and chnage any format
let add:unknown="sfdhasd"+201;//similar to any but safe
let job:boolean=true; //define only boolean
let salary:null=null; //null
let experince:undefined=undefined; //undefined

console.log("name :",name,">> age :",age,">> address :",address,">> add :",add,">> job :",job,">> salary :",salary,">> experince :",experince);
console.log("name :",typeof(name));
console.log("age :",typeof(age));
console.log("address :",typeof(address));
console.log("add :",typeof(add));
console.log("job :",typeof(job));
console.log("salary :",typeof(salary));
console.log("experince :",typeof(experince));


