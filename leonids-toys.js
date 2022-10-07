// leonid's toys exercise; make three toys using objects
// const toyToFind = 4;

const toys = new Set()

toys.add(
    {
    id: 1,
    name: "Jack In The Box",
    manufacturer: "ACME Toy Co",
    price: 6.99,
    weight: 3.5,
    levelOfFun: 3
    }
)

toys.add(
    {
    id: 2,
    name: "Yo-Yo",
    manufacturer: "Duncan Toys",
    price: 11.99,
    weight: 0.8,
    levelOfFun: 5
    }
)

toys.add(
    {
    id: 3,
    name: "Monopoly",
    manufacturer: "Hasbro",
    price: 21.99,
    weight: 1.3,
    levelOfFun: 7
    }
)

toys.add(
    {
    id: 4,
    name: "BB Gun",
    manufacturer: "Red Rider",
    price: 34.99,
    weight: 4.5,
    levelOfFun: 9
    }
)

toys.add(
    {
    id: 5,
    name: "Marbles",
    manufacturer: "ACME Toy Co",
    price: 4.49,
    weight: 3.1,
    levelOfFun: 4
    }
)

// for (const toy of toys) {
//    toy.price *= 1.05
// }

/*
for (const toy of toys) {
    if (toyToFind === toy.id) {
    console.log(`The ${toy.name}, made by ${toy.manufacturer} now costs ${toy.price}.`)
    }
}
*/

/*
for (const toy of toys) {
    delete toy.price
}
*/

const currentPrices = new Map();
currentPrices.set("Jack In The Box", 7.99)
currentPrices.set("Yo-Yo", 11.99)
currentPrices.set("Monopoly", 21.99)
currentPrices.set("BB Gun", 34.99)
currentPrices.set("Marbles", 4.49)

for (let [toy, price] of currentPrices) {
    console.log(toy, price)
}

for (const toy of toys) {
    console.log(toy)
}