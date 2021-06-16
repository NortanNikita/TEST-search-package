
  /*
* Function fields
* Arguments:
*  1. obj - state
*  2. path - path field
*  3. value - data object
*/
export default (obj, path, value) => {
  const pList = path.split('.');
  const key = pList.pop();
  const pointer = pList.reduce((accumulator, currentValue) => {
    if (accumulator[currentValue] === undefined) accumulator[currentValue] = {};
    return accumulator[currentValue];
  }, obj);
  pointer[key] = value;
  return obj;
}
