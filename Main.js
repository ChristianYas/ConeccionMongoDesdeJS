let methods = require("./Connection")

let {get, insert, update, deleteOne} = methods

//FIND ALL
get().then(pets => console.log(pets))


//INSERT PET
let petInsert = {
    nombre: "Max",
    edad: 8,
    raza: "chihuahua"
}

insert(petInsert)


//UPDATE PET
let nameUpdatePet = {nombre: "Max"}

let newPetUpdate = {$set: {nombre: "Husky"}}

update(nameUpdatePet, newPetUpdate)

//DELETE PET
let nameDeleteDocument = {nombre: "Francisco"}

deleteOne(nameDeleteDocument)