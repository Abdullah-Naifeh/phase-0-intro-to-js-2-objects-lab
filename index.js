// Write your solution in this file!
const employee  = {
    Name : "Ali" ,
    StreetAdress : "1058.st"
}

function updateEmployeeWithKeyAndValue(obj , key ,value){
    const newObj = {...obj}

    newObj[key]= value;

    return newObj;
}

const newEmployee = (updateEmployeeWithKeyAndValue(employee , "Name" , "Mouhammed"));
console.log(newEmployee);


function destructivelyUpdateEmployeeWithKeyAndValue(obj , key ,value){
    obj[key] = value

    return obj;

}
console.log(destructivelyUpdateEmployeeWithKeyAndValue(employee , "StreetAdress" , "1900.st"))

console.log(employee)

function deleteFromEmployeeByKey(obj , key){
    const newObj = {...obj}

    delete newObj[key]

    return newObj;
}
const newerEmployee = deleteFromEmployeeByKey(employee ,"StreetAdress")
console.log(newerEmployee);

function destructivelyDeleteFromEmployeeByKey(obj , key){
    delete obj[key]

    return obj;
}
const latestEmployee = destructivelyDeleteFromEmployeeByKey(employee ,"StreetAdress")
console.log(latestEmployee);

