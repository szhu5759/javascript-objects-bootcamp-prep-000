var kitten = { White: "Snow"}

function assignObjects(kitten,name,color) {

  return Object.assign({}, kitten, {[name]: color
  })
}

const meows = {
  White: "Snow",
  Black: "Midnight",
  Yellow: "Honey"
}

assignObjects(meows)

console.log(meows)

const meows2 = {
  Orange: "Peaches",
  ["White and Black"]: "Moo Moo",
  Gray: "Dusty"
}

assignObjects(meows2)

console.log(meows2)
