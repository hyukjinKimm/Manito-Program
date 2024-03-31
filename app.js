const { shuffle } = require("./shuffle");
const { getData } = require("./getData");
const { sendMail } = require("./emailConfig/email");
async function main() {
  let rows = await getData();
  rows = rows.slice(1);
  console.log(rows);
  const result = shuffle(rows);
  console.log(result);
  for (let i = 0; i < rows.length; i++) {
    const target = rows[result[i]];
    console.log(rows[i][0] + " 은 " + rows[result[i]][0] + "의 마니또!");

    await sendMail(rows[i][2], target[0], target[1], target[3]);
    setTimeout(() => {}, 500);
  }
}

main();
