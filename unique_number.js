const find_unique_index = (arr) => {
  let sameNum;
  if (arr[0] == arr[1]) {
    // the same one is arr[0]
    sameNum = arr[0];
  } else if (arr[1] == arr[2]) {
    //the same one is arr[1]
    sameNum = arr[1];
  } else {
    //the unique one is arr[1]
    return 1;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== sameNum) {
      return i;
    }
  }
};
