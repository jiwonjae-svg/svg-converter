# SVG Converter 🎨

이미지를 고품질 SVG 벡터 파일로 변환하는 웹 애플리케이션입니다.

🌐 **Live Demo**: https://img-to-svg-converter.vercel.app (Vercel에 배포 후 자동 생성됨)

## ✨ 주요 기능

- **파티클 기반 렌더링**: 2-패스 격자 시스템으로 고품질 SVG 생성
- **드래그 앤 드롭**: 간편한 파일 업로드
- **색상 분석**: 이미지에서 고유 색상 자동 추출
- **커스터마이징**: 파티클 크기, 밀도, 블러 등 세부 설정 가능
- **다크/라이트 모드**: 시스템 테마 연동
- **다국어 지원**: 한국어, English, 日本語, 中文
- **SVG 코드 미리보기**: 변환 결과 즉시 확인 및 복사
- **Google AdSense 통합**: 광고 수익화 지원

## 🚀 시작하기

### 개발 환경 설정

```bash
# 의존성 설치
npm install

# 개발 서버 시작
npm run dev

# 빌드
npm run build

# 미리보기
npm run preview
```

## 🚀 Vercel 배포

### 방법 1: Vercel CLI (권장)

```bash
# Vercel CLI 설치
npm i -g vercel

# 배포
vercel

# 프로덕션 배포
vercel --prod
```

### 방법 2: GitHub 연동 (자동 배포)

1. **Vercel 계정 생성**
   - https://vercel.com 접속
   - GitHub 계정으로 로그인

2. **프로젝트 import**
   - "New Project" 클릭
   - GitHub 저장소 선택
   - 프레임워크: Vite 자동 감지
   - "Deploy" 클릭

3. **자동 배포 설정**
   - main 브랜치에 push하면 자동으로 배포됨
   - PR마다 미리보기 배포 생성됨

### Vercel 환경 변수 설정 (AdSense용)

Vercel 대시보드 → Settings → Environment Variables:
```
VITE_ADSENSE_CLIENT_ID=ca-pub-XXXXXXXXXXXXXXXX
```

```bash
npm run deploy
```

또는 GitHub Actions를 통해 자동 배포됩니다 (main 브랜치 push 시).

## 🛠️ 기술 스택

- **React 19** + TypeScript
- **Vite** - 빌드 도구
- **Zustand** - 상태 관리
- **react-dropzone** - 파일 업로드
- **lucide-react** - 아이콘
- **react-hot-toast** - 알림

## 📁 프로젝트 구조

```
src/
├── components/          # UI 컴포넌트
│   ├── Header/         # 헤더 (테마/언어 전환)
│   ├── Footer/         # 푸터 (개발자 정보)
│   ├── Dropzone/       # 파일 업로드 영역
│   ├── ImageList/      # 업로드된 이미지 목록
│   ├── Settings/       # 변환 설정 패널
│   ├── Results/        # 변환 결과 표시
│   └── AdBanner/       # 광고 배너
├── i18n/               # 다국어 번역 파일
├── store/              # Zustand 상태 관리
├── types/              # TypeScript 타입 정의
├── utils/              # 유틸리티 함수
│   ├── imageConverter.ts  # 이미지 → SVG 변환 로직
│   └── security.ts        # 보안 관련 유틸리티
└── App.tsx             # 메인 앱 컴포넌트
```

## 🔒 보안 기능

- **CSP (Content Security Policy)**: XSS 공격 방지
- **입력 검증**: 파일 타입/크기 검증
- **SVG 정제**: 악성 코드 제거
- **Rate Limiting**: 과도한 요청 방지
- **보안 헤더**: X-Frame-Options, X-Content-Type-Options 등

## 🎨 변환 알고리즘

1. **색상 분석**: K-means 클러스터링으로 이미지의 대표 색상 추출
2. **양자화**: 추출된 색상으로 이미지 단순화
3. **윤곽선 추적**: Marching Squares 알고리즘으로 각 색상 영역의 경계 추출
4. **경로 최적화**: Douglas-Peucker 알고리즘으로 경로 단순화
5. **SVG 생성**: 각 색상 레이어를 SVG path로 변환

## 📄 라이선스

MIT License

## 👨‍💻 개발자

- GitHub: [@jiwonjae-svg](https://github.com/jiwonjae-svg)

---

Made with ❤️
