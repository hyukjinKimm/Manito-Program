const readXlsxFile = require("read-excel-file/node");

exports.getData = async function getData() {
  const rows = await readXlsxFile("./data.xlsx");
  return rows;
};
