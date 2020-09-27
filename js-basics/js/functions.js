// FUNCTIONS
const osman = (name,surname) => {
  alert("Merhaba "+name+" "+surname);
}

const canDrive = (name,age) => {
  if (age>=18){
    return "You can drive "+name+".";
  }
  else{
    return "You cannot drive yet "+name+".";
  }
}

alert(canDrive("Yusuf",17));