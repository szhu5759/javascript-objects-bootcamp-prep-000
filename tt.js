var kitten = { White: "Snow"}

function assignObjects(kitten,name,color) {
  
  return Object.assign({}, kitten, {[name]: color
  })
}

const meows = { 
  White: "Snow",
  Black: "Midnight",
  Yellow "Honey",
}