## 🏡WeAreBnB Project

[시현 영상] https://www.youtube.com/watch?v=KUeAS8k2ok0


### [팀명] : WeAreBnB (위아비엔비)

- 에어비엔비(https://www.airbnb.co.kr/) 클론 프로젝트
- 짧은 프로젝트 기간동안 개발에 집중해야하므로 디자인/기획 부분만 클론했습니다.
- 개발은 초기 세팅부터 전부 직접 구현했으며, 위 데모 영상에서 보이는 부분은 모두 백앤드와 연결하여 실제 사용할 수 있는 서비스 수준으로 개발한 것입니다.

### 프로젝트 선정이유

- 

### 개발 인원 및 기간

- 개발기간 : 2021/11/15 ~ 2021/11/26
- 개발 인원 : 프론트엔드 4명, 백엔드 3명
- 프론트엔드 : 김여름, 박소윤, 석예주, 임기범
- 백엔드 : 박민정, 이지은, 한화연
- [프론트 github 링크](https://github.com/wecode-bootcamp-korea/26-2nd-WeAreBnB-frontend.git)
- [백 github 링크](https://github.com/wecode-bootcamp-korea/26-2nd-WeAreBnB-backend.git)
  <br>

## 적용 기술 및 구현 기능
### [소셜 로그인]
- 카카오톡 REST API를 연결하여 소셜 로그인 기능을 구현함

### [마이페이지]
- s3로 파일 업로드를 하여 프로필 사진 업데이트 기능을 구현함
- sticky를 이용하여 프로필 창을 스크롤시 따라다닐 수 있도록 구현함.
- 로그인한 회원의 예약한 숙박 리스트를 db에 저장된 데이터로 받아서 슬라이드 형식으로 구현함
- 숙박 리스트에서 예약 카드 선택시 해당 숙소의 상태페이지로 넘어갈 수 있도록 패스파라미터를 이용함.
- 로그인한 회원이 예약한 숙박 리스트에서 선택하여 리뷰 형식을 모두 충족해야만 추가될 수 있도록 구현함. 

### [NAV 검색창]
- 검색 바를 클릭시, 검색 NAV로 활성화 시키도록 구현함.
- 유저가 검색한 정보를 유효성검사를 통해 빈 input창 없이 모두 값이 있어야만 검색을 할 수 있도록 구현함.
- 필수 정보(위치, 날짜, 인원)를 쿼리파라미터로 url 주소로 리스트페이지에 넘겨주어 필터링된 페이지로 연결되도록 구현함.
- 오른쪽 상단 로그인 버튼을 눌렀을 시 로그인이 안되어있다면 로그인페이지로, 되어있다면 마이페이지/로그아웃 창이 뜨도록 구현함.

### [리스트페이지]
- 필터링된 쿼리파라미터 url 주소를 넘겨받아 그에 맞는 데이터가 보여지도록 구현함.
- 요금, 숙소유형 등으로 다시 한번 필터링된 데이터를 보여질 수 있도록 구현함.
- range 슬라이더 라이브러리를 사용하여 요금 필터기능을 구현함.
- 필터링된 데이터를 유지하면서 페이지네이션 진행.
- 숙소 이미지를 슬라이드 형식으로 구현함.
- 구글 MAP API를 이용하여 필터링된 위치를 보여지도록 구현하였고, 그에 맞는 마커를 띄어줌. 
- 숙소 hover시 해당 숙소 마커에 하이라이트 될 수 있도록 구현함.
- sticky를 이용하여 스크롤을 내렸을 때에도 지도가 고정되어 보여질 수 있도록 구현함.

### [상세페이지]
- 숙소 정보를 data로 받아 패스파라미터를 통해 해당 숙소 페이지를 보여지도록 구현함.
- 상세 페이지 이미지를 데이터로 받아 필요한 부분을 슬라이스하여 구현함.
- sticky를 이용하여 예약 옵션창을 스크롤시 따라다닐 수 있도록 구현함.
- 옵션창에서 옵션선택시(인원, 체크인&체크아웃 날짜) 옵션에 따른 금액이 변경되어 예약할 수 있도록 구현함. 
- react-dates라이브러리를 사용하여 날짜추가 옵션을 선택시 달력을 띄어주었고 예약가능한 날짜만 선택할 수 있도록 예약된 날짜는 block처리함
- 인원수를 최대인원에 맞게 선택할 수 있도록 비활성화 처리함.
- 예약하기 버튼을 눌렀을 시 로그인 여부에 따라 로그인페이지/마이페이지로 이동할 수 있도록 구현함.
- 

### 적용 기술
> - Front-End : JavaScript, React.js, styled-component, React-router-dom.ver6, AWS(EC2) 
> - Front-End Library :React-icons, React-dates, moment, rheostat, google map API, kakaoAPI
> - Back-End : Django, Python, MySQL, jwt, bcrypt, AWS(EC2, RDS) - 수정예정
> - Common : Git, Github, Slack, Trello, dbdiagram, postman

### 구현 기능

<br>
## Reference
- 이 프로젝트는 에어비엔비(https://www.airbnb.co.kr/) 사이트를 참조하여 학습목적으로 만들었습니다.
- 실무수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.
- 이 프로젝트에서 사용하고 있는 사진 대부분은 위코드에서 구매한 것이므로 해당 프로젝트 외부인이 사용할 수 없습니다.
