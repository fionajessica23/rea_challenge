export function addProperty(state, id) {
  const { results, saved } = state;
  const existingProp = saved.filter(savedProp => savedProp.id === id)[0];
  const propertyToBeCloned = results.filter(objProp => objProp.id === id)[0];

  if (!existingProp) {
    const copiedProp = Object.assign({}, propertyToBeCloned);
    saved.push(copiedProp);
  }

  return {
    saved,
  };
}


export function removeProperty(state, id) {
  const { saved } = state;

  return {
    saved: saved.filter(savedProp => savedProp.id !== id),
  };
}
