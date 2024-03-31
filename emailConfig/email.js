const { smtpTransport } = require("./config");
const dotenv = require("dotenv");
const fs = require("fs");
dotenv.config();
exports.sendMail = async (to, name, part, cardial) => {
  let html = fs.readFileSync("./resources/template.html").toString();
  const dynamicData = {
    name,
    cardial,
    part,
  };
  Object.keys(dynamicData).forEach((key) => {
    html = html.replace(new RegExp(`\\$\\{${key}\\}`, "g"), dynamicData[key]);
  });

  const mailOptions = {
    from: process.env.SMTP_USER, // 발신자 이메일 주소.
    to, //사용자가 입력한 이메일 -> 목적지 주소 이메일
    subject: " 마니또 결과입니다. ",
    html,
  };
  smtpTransport.sendMail(mailOptions, (err, response) => {
    //첫번째 인자는 위에서 설정한 mailOption을 넣어주고 두번째 인자로는 콜백함수.
    if (err) {
      console.log(err);
      smtpTransport.close(); //전송종료
      return;
    } else {
      smtpTransport.close(); //전송종료
      return;
    }
  });
};
