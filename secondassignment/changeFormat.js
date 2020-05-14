const changeFormatOfusDate = usDate => {
  const usDateToArr = usDate.split('/');
  for (let i = 0; i < usDateToArr.length; i++) {
    if (usDateToArr[i].length < 2) {
      usDateToArr[i] = 0 + usDateToArr[i];
    }
  };

  const temp = usDateToArr[0];
  usDateToArr[0] = usDateToArr[1];
  usDateToArr[1] = temp;

  return usDateToArr.join(".");
}
