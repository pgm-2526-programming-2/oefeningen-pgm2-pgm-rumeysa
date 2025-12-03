// VAT bij europese webshop
// BTW is belgische webshop

//instelling
const regionNotation = "btw";

// Object
const product = {
  price: 25,
  name: "gameboy",
  [regionNotation]: 21, // dit is een variablele key
};

// const productKeys = ['keys', 'name']
const productKeys = Object.keys(product);

product.color = "red";
product.color = "blue"; // gaat nu blauw worden want unike key dus kan niet twee color
product[regionNotation] = 32;

// object length in JS?

productKeys.length;

const productMap = new Map();
productMap.set("price", 25);
productMap.set("name", "gameboy");
productMap.set("color", "red");
productMap.set("color", "blue");
productMap.set(regionNotation, 20);

// voordeel makkelijker de lengte ophalen
const productMapLength = productMap.size;

console.log(product, productMap);
