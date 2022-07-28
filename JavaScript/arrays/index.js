let array = ['i', 'am', 'going', 'to', 'school', 'today'];

const getMaxElementLen = (array) => {
  let maxNumber = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i].length > maxNumber) {
      maxNumber = array[i].length;
    }
  }
  return `maxNum:${maxNumber}`;
};

let result = getMaxElementLen(array);

console.log(result);
