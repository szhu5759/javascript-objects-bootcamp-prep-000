function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value
  return Object
}

const recipe = { eggs : 3 }

destructivelyUpdateObjectWithKeyAndValue(recipe, 'flour', '3 cups')

console.log(recipe)
