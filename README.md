## 실행 방법

### `yarn install`

필요한 패키지를 설치합니다.

### `yarn dev`

개발 모드에서 앱을 실행합니다.

<br/>

## 파일구조

📦src <br/>
┣ 📂Pages <br/>
┃ ┣ 📂Dashboard <br/>
┃ ┃ ┗ 📜index.tsx // 대시보드 페이지 <br/>
┃ ┗ 📜index.tsx <br/>
┣ 📂Utils <br/>
┃ ┗ 📜Format.ts // 유틸 함수 <br/>
┣ 📂apis <br/>
┃ ┗ 📜index.ts // API 요청 함수 <br/>
┣ 📂common <br/>
┃ ┣ 📂Snackbar <br/>
┃ ┃ ┗ 📜index.tsx // API request 실패 시 노출되는 스낵바 <br/>
┃ ┗ 📂Table // Top referral 정보를 보여주는 Table <br/>
┃ ┃ ┣ 📜TableBody.tsx <br/>
┃ ┃ ┣ 📜TableHeader.tsx <br/>
┃ ┃ ┗ 📜TableRow.tsx <br/>
┣ 📂components <br/>
┃ ┗ 📂Dashboard <br/>
┃ ┃ ┣ 📜DauChart.tsx // DAU 차트 컴포넌트 <br/>
┃ ┃ ┣ 📜SummaryCard.tsx // user event를 보여주는 카드 컴포넌트 <br/>
┃ ┃ ┣ 📜TopReferralInPieChart.tsx // Top referral 데이터를 보여주는 pie chart 컴포넌트 <br/>
┃ ┃ ┣ 📜TopReferralInTable.tsx // Top referral 데이터를 보여주는 테이블 컴포넌트 <br/>
┣ 📂constants <br/>
┃ ┗ 📜layoutConfig.ts // responsive layout 값들을 정의하는 constant <br/>
┣ 📂stores // global state를 관리하는 store <br/>
┃ ┣ 📂slice <br/>
┃ ┃ ┣ 📜SnackbarSlice.tsx // snackbar state 관리를 위한 slice <br/>
┃ ┃ ┗ 📜UserEventInfoSlice.tsx // 대시보드에 관련된 모든 state 관리를 위한 slice <br/>
┃ ┣ 📜hooks.tsx // Store의 custom hook <br/>
┃ ┗ 📜index.tsx
┣ 📜App.css
┣ 📜App.tsx
┣ 📜index.css
┣ 📜main.tsx
┗ 📜vite-env.d.ts

---

<br/>

## 기술 스택

### redux-toolkit

- client state 관리를 위해 적용.

### react-grid-layout

- 그래프들을 draggable, resizable 하게 하기 위해 사용

### recharts

- 요구되는 차트를 그리기 위해 사용

### react-icons

- 아이콘 사용

---

<br/>
