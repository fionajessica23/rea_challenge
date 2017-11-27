
export function addProperty(state, id) {
  var { results, saved } = state
  var existingProp = saved.filter(savedProp => savedProp.id === id)[0]
  var propertyToBeCloned = results.filter(objProp => objProp.id === id)[0]

  if (!existingProp) {
    var copiedProp = Object.assign({}, propertyToBeCloned)
    saved.push(copiedProp)
  }

  return {
    saved: saved
  };
}


export function removeProperty(state, id) {
  var { saved } = state

  return {
    saved: saved.filter(saved => saved.id !== id)
  };
}
