exports.shuffle = (rows) => {
  const result = [];
  for (let i = 0; i < rows.length; i++) {
    let temp = Math.floor(Math.random() * rows.length);
    while (i == temp || result.includes(temp)) {
      temp = Math.floor(Math.random() * rows.length);
    }
    result.push(temp);
  }

  return result;
};
