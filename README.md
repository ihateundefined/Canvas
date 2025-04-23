# 틀린 그림 찾기 게임

<div align="center">
  
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

</div>

틀린 그림 찾기는 시간 제한 내에 두 이미지 사이의 차이점을 찾는 웹 기반 게임입니다. 총 3단계로 구성되어 있으며, 각 단계마다 5개의 차이점을 찾아야 합니다.

<div align="center">
  <img src="https://via.placeholder.com/800x400" alt="틀린 그림 찾기 게임 미리보기" width="800"/>
</div>

## 🎮 게임 특징

- 3개의 서로 다른 레벨/이미지 세트
- 각 레벨마다 5개의 차이점 찾기
- 60초 타이머로 시간 제한
- 점수 시스템: 정답 +200점, 오답 -50점
- 반응형 디자인: 데스크톱 및 모바일 장치 모두 지원
- 마우스와 터치 인터페이스 지원

## 🎯 게임 방법

1. "게임 시작" 버튼을 클릭하여 게임을 시작합니다.
2. 왼쪽과 오른쪽 이미지를 비교하며 차이점을 찾습니다.
3. 차이점을 발견하면 해당 부분을 클릭하거나 드래그합니다.
4. 정답이면 빨간색으로 표시되고, 오답이면 보라색으로 표시됩니다.
5. 하나의 레벨에서 모든 차이점을 찾으면 다음 레벨로 넘어갈 수 있습니다.
6. 모든 레벨을 완료하거나 시간이 초과되면 게임이 종료됩니다.

## 📁 프로젝트 구조

```
틀린그림찾기/
├── index.html         # 메인 HTML 파일
├── styles.css         # CSS 스타일시트
├── scripts.js         # 게임 로직 JavaScript
└── sources/           # 이미지 폴더
    ├── 1-1.jpg        # 레벨 1 왼쪽 이미지
    ├── 1-2.jpg        # 레벨 1 오른쪽 이미지
    ├── 2-1.jpg        # 레벨 2 왼쪽 이미지
    ├── 2-2.jpg        # 레벨 2 오른쪽 이미지
    ├── 3-1.jpg        # 레벨 3 왼쪽 이미지
    └── 3-2.jpg        # 레벨 3 오른쪽 이미지
```

## 🛠️ 주요 기능

### 반응형 캔버스
게임은 다양한 화면 크기에 맞게 조정되어 모바일 및 데스크톱 환경에서 모두 최적의 경험을 제공합니다.

### 터치 및 마우스 상호작용
마우스 이벤트와 터치 이벤트를 모두 지원하여 모든 장치에서 원활한 게임플레이가 가능합니다.

### 실시간 피드백
- 시각적 타이머 바
- 정답/오답 표시
- 점수 업데이트
- 찾은 차이점 카운터

### 자동 크기 조정
원본 이미지 비율을 유지하면서 화면 크기에 맞게 자동으로 조정됩니다.

## 🎨 UI/UX 디자인

- Pretendard 폰트를 사용한 깔끔한 디자인
- 애니메이션이 있는 버튼 효과
- 직관적인 색상 피드백 (정답: 빨간색, 오답: 보라색)
- 시각적 타이머 바로 남은 시간을 명확하게 표시

## 🚀 설치 및 실행 방법

1. 저장소를 클론합니다:
   ```bash
   git clone https://github.com/your-username/spot-the-difference-game.git
   cd spot-the-difference-game
   ```

2. 로컬 서버를 사용하여 실행합니다(예: VS Code의 Live Server 확장 프로그램 사용)

3. 또는 `index.html` 파일을 브라우저에서 직접 열어도 됩니다

## 💡 개선 가능한 점

- [ ] 난이도 선택 옵션 추가
- [ ] 더 많은 이미지 세트 추가
- [ ] 최고 점수 기록 시스템
- [ ] 사운드 효과 및 배경 음악
- [ ] 멀티플레이어 모드

## 🤝 기여하기

기여는 항상 환영합니다!

1. 이 저장소를 포크합니다
2. 새 기능을 위한 브랜치를 생성합니다: `git checkout -b feature/amazing-feature`
3. 변경사항을 커밋합니다: `git commit -m 'Add some amazing feature'`
4. 원격 브랜치에 푸시합니다: `git push origin feature/amazing-feature`
5. Pull Request를 제출합니다

## 📋 라이선스

이 프로젝트는 MIT 라이선스를 따릅니다. 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.

## 📞 연락처

프로젝트 링크: [https://github.com/your-username/spot-the-difference-game](https://github.com/your-username/spot-the-difference-game)

---

**즐거운 게임 되세요!** 🎮
