
export function addProperty(state, result) {
  var { saved } = state
  var existingProp = saved.filter(savedProp => savedProp.id === result.id)[0]

  if (!existingProp) {
    var copiedProp = Object.assign({}, result)
    saved.push(copiedProp)
  }

  return {
    saved: saved
  };
}



export function removeProperty(state, savedProp) {
  var { saved } = state

  return {
    saved: saved.filter(saved => saved.id !== savedProp.id)
  };
}
