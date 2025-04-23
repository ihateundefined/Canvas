# 틀린 그림 찾기

인터랙티브한 틀린 그림 찾기 게임 웹 애플리케이션입니다.

## 📌 소개

**틀린 그림 찾기**는 사용자가 두 개의 이미지를 비교하여 차이점을 찾아내는 재미있고 도전적인 웹 기반 게임입니다. 캔버스와 터치/마우스 이벤트를 활용해 직관적인 사용자 경험을 제공하며, 타이머와 점수 시스템으로 긴장감을 더했습니다. 모바일과 데스크톱 환경 모두에서 원활한 플레이를 지원합니다. 또한, 게임 개발 과정에서 정답 좌표를 확인하기 위한 별도의 좌표 확인 도구도 포함되어 있습니다.

## ✨ 주요 기능

**게임 기능**
- 두 이미지 간의 차이점 찾기 (레벨별 5개 차이점)
- 캔버스 기반 인터랙티브 드로잉 (마우스/터치 지원)
- 타이머 및 점수 시스템
- 반응형 디자인 (모바일/데스크톱 호환)
- 다단계 레벨 진행 및 결과 피드백
- 애니메이션 효과 (버튼 호버, 정답 표시)

**좌표 확인 도구**
- 이미지 클릭 시 해당 좌표 표시 및 콘솔 출력
- 클릭 지점에 빨간 점으로 시각적 표시
- 정답 좌표 설정을 위한 개발자 지원 도구

## 🛠️ 기술 스택

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)
![Canvas API](https://img.shields.io/badge/Canvas_API-000000?style=flat-square&logo=html5&logoColor=white)

- **프론트엔드**: HTML5, CSS3, JavaScript
- **UI 프레임워크**: Tailwind CSS
- **폰트**: Pretendard
- **렌더링**: HTML5 Canvas API
- **이벤트 처리**: 마우스 및 터치 이벤트

## 📸 스크린샷
**틀린 그림 찾기**
![틀린 그림 찾기 메인화면](./sources/mainPage.png)

**좌표 확인**
![좌표 확인 메인화면](./sources/checkCoordinate.png)

## 🎮 게임 방식

1. **게임 시작**: 메인 화면에서 "게임 시작" 버튼을 클릭합니다.
2. **차이점 찾기**: 좌우 캔버스에 표시된 두 이미지를 비교해 차이점을 클릭하거나 드래그하여 표시합니다.
3. **타이머**: 60초 내에 5개의 차이점을 찾아야 합니다.
4. **점수**: 정답(+200점), 오답(-50점)으로 점수가 계산됩니다.
5. **레벨 진행**: 총 3개의 레벨이 있으며, 모든 차이점을 찾으면 다음 레벨로 이동합니다.
6. **게임 종료**: 마지막 레벨 완료 후 최종 점수를 확인하고 게임을 재시작할 수 있습니다.

## 🖱️ 좌표 확인 도구 사용법

좌표 확인 도구는 게임의 정답 좌표를 설정하기 위해 개발된 간단한 웹 페이지입니다.

1. **실행하기**: ./coordinate.html 파일을 브라우저에서 엽니다.
2. **클릭하기**: 이미지가 로드되면, 원하는 위치를 클릭하여 좌표를 확인합니다.
3. **좌표 확인**: 클릭한 좌표는 화면 하단에 표시되며, 브라우저 콘솔에도 출력됩니다.
4. **시각적 확인**: 클릭 지점은 빨간 점으로 표시되어 시각적으로도 확인 가능합니다.

## 📝 프로젝트 구조

```
Canvas/
├── index.html               # 메인 HTML 파일
├── coordinate.html          # 좌표 확인 도구 HTML 파일
├── styles.css               # 스타일시트
├── scripts.js               # 게임 로직
├── sources/ 
│   ├── 1-1.jpg              # 레벨 1 왼쪽 이미지
│   ├── 1-2.jpg              # 레벨 1 오른쪽 이미지
│   ├── 2-1.jpg              # 레벨 2 왼쪽 이미지
│   ├── 2-2.jpg              # 레벨 2 오른쪽 이미지
│   ├── 3-1.jpg              # 레벨 3 왼쪽 이미지
│   ├── 3-2.jpg              # 레벨 3 오른쪽 이미지
│   └── gameStart.png        # 게임 첫 화면 스크린샷
│   └── mainPage.png         # 게임 화면 스크린샷
│   └── checkCoordinate.png  # 좌표 도구 스크린샷
└── README.md                # 프로젝트 설명
```

## 🛠️ 설치 및 실행

1. 레포지토리를 클론합니다:
   ```bash
   git clone git@github.com:ihateundefined/Canvas.git
   ```
2. 프로젝트 디렉토리로 이동합니다:
   ```bash
   cd Canvas
   ```
3. 로컬 서버를 실행하거나 `index.html`을 브라우저에서 직접 엽니다:
   ```bash
   npx live-server
   ```

> **참고**: 이미지는 `./sources/` 디렉토리에 포함되어 있어야 하며, 외부 서버 호스팅 시 CORS 설정을 고려해야 할 수 있습니다.

## 🔮 향후 개발 계획

- 추가 레벨 및 난이도 설정
- 사용자 리더보드 및 점수 저장 기능
- 사운드 효과 및 배경 음악 추가

## 📫 Link to

- **Page**: [https://ihateundefined.github.io/Canvas/](https://ihateundefined.github.io/Canvas/)
- **GitHub**: https://github.com/ihateundefined/Canvas
- **이메일**: ihateundefined@gmail.com


궁금한 점이나 피드백이 있다면 이슈를 열어주세요! 😊

---

*이 프로젝트는 재미와 학습을 위해 제작되었습니다. 즐겨주세요! 🎉*
