// ARRAYS
const brands = ["Apple", 12, "Samsung", ["abc","cde"], () => {
  alert("Hello")
}];

const brands = ["Apple", 12 , "abc","cde"];

brands.forEach((name,index) => {
  console.log(name +" "+ index)
});

let newBrands = brands.map((value) => {
  return value+"!";
});

newBrands = brands.filter((value,index) => {
  return value ==="12";
})

console.log(newBrands);