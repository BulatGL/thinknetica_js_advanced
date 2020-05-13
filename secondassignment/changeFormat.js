const changeFormatOfusDate = usDate => {
  const usDateToArr = usDate.split('/');
  for (let i = 0; i < usDateToArr.length; i++) {
    if (usDateToArr[i].length < 2) {
      usDateToArr[i] = 0 + usDateToArr[i];
    }
  };

  return usDateToArr.join(".");
}
