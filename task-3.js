const stringName =  ["Pyton", "C++", "C#", "PHP"] 
const check = stringName.includes("Java Script")

if(check === false){
    console.log("Значення Java Script в списку немає, додаємо в масив");
    stringName.push("Java Script")
    console.log(stringName);
}else{
    console.log(check);
}