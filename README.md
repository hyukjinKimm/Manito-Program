# Manito-Program

내가 쓰려고 만든 마니또 메일 발송 프로그램🎁

## 용어 설명
- 마니또: 선물을 주는사람
- 마니띠: 선물을 받는사람

## 로직 
- 선물은 각자 1개주고 1개 받는다.
- 각자가 마니또 이자 마니띠가 된다!

## 🖥️ 사용법
1. **data.xlsx을 다음과 같이 생성**
> ![image](https://github.com/hyukjinKimm/Manito-Program/assets/107605573/298b41c2-387d-4843-8c54-86e5ff156046)
2. **.env 파일을 생성**
> ![image](https://github.com/hyukjinKimm/Manito-Program/assets/107605573/799244eb-6329-4aa5-8fc6-f8afeb1b3747)
3. **다음의 명령어 입력(아주 쉽죠?)**
```javascript
npm i
npm run start
```

## 🏯 결과
<img src="https://github.com/hyukjinKimm/Manito-Program/assets/107605573/21f465f9-dda5-4357-abc3-cfdb5e25088e"  width="400" height="400"/>

- **마니또에게 마니띠 정보를 자동 발송**

## ⚠️유의사항
- **엑셀 데이터의 컬럼변경 시 sendMail 함수를 편집하셔야 합니다!**
- **메일로 발송되는 html 템플릿 변경시 resources/template.html 을 편집하셔야 합니다!**
