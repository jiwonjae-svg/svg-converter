# SVG Converter 🎨

이미지와 SVG를 상호 변환하는 웹 애플리케이션입니다.

🌐 **Live Demo**: https://img-to-svg-converter.vercel.app (Vercel에 배포 후 자동 생성됨)

## ✨ 주요 기능

### 양방향 변환
- **Image → SVG**: PNG, JPG, WEBP 이미지를 벡터 SVG로 변환
- **SVG → Image**: SVG 파일을 PNG 또는 JPG 이미지로 변환
- **원클릭 토글**: 헤더의 토글 버튼으로 변환 모드 간편 전환

### 핵심 기능
- **파티클 기반 렌더링**: 2-패스 격자 시스템으로 고품질 SVG 생성
- **다중 포맷 내보내기**: SVG, PNG (2× 해상도), JPG (흰 배경) 지원
- **드래그 앤 드롭**: 간편한 파일 업로드
- **색상 분석**: 이미지에서 고유 색상 자동 추출
- **커스터마이징**: 파티클 크기, 밀도, 블러 등 세부 설정 가능

### 사용자 경험
- **다크/라이트 모드**: 시스템 테마 자동 연동
- **다국어 지원**: 한국어, English, 日本語, 中文 (자동 감지)
- **SVG 코드 미리보기**: 변환 결과 즉시 확인 및 복사
- **배치 처리**: 여러 이미지 동시 변환 가능

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

## 📖 사용 방법

### Image → SVG 변환

1. 헤더에서 **"이미지 → SVG"** 모드 선택
2. 이미지 파일 업로드 (PNG, JPG, WEBP)
3. 파티클 크기, 밀도, 블러 등 설정 조정
4. "변환하기" 버튼 클릭
5. 결과에서 SVG, PNG, JPG 다운로드 또는 코드 복사

### SVG → Image 변환

1. 헤더에서 **"SVG → 이미지"** 모드 선택
2. SVG 파일 업로드
3. "변환하기" 버튼 클릭 (설정 불필요)
4. PNG 또는 JPG 형식으로 다운로드

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
│   ├── Header/         # 헤더 (테마/언어/모드 전환)
│   ├── Footer/         # 푸터 (개발자 정보)
│   ├── Dropzone/       # 파일 업로드 영역
│   ├── ImageList/      # 업로드된 이미지 목록
│   ├── Settings/       # 변환 설정 패널
│   └── Results/        # 변환 결과 표시
├── i18n/               # 다국어 번역 파일
├── store/              # Zustand 상태 관리
├── types/              # TypeScript 타입 정의
├── utils/              # 유틸리티 함수
│   ├── imageConverter.ts  # 이미지 → SVG 변환 로직
│   ├── svgToImage.ts      # SVG → 이미지 변환 로직
│   └── security.ts        # 보안 관련 유틸리티
└── App.tsx             # 메인 앱 컴포넌트
```

## 🔒 보안 기능

- **CSP (Content Security Policy)**: XSS 공격 방지
- **입력 검증**: 파일 타입/크기 검증
- **SVG 정제**: 악성 코드 제거
- **Rate Limiting**: 과도한 요청 방지
- **보안 헤더**: X-Frame-Options, X-Content-Type-Options 등

## 🎨 변환 알고리즘 (Image → SVG)

1. **이미지 전처리**: 최대 600×600으로 리사이즈, 선택적 가우시안 블러
2. **배경 감지**: 4모서리 픽셀 샘플링으로 배경색 자동 감지
3. **2-패스 격자 샘플링**:
   - 첫 번째 패스: 정렬된 격자 샘플링
   - 두 번째 패스: 오프셋 격자로 빈 공간 채우기
4. **색상 추출**: 휘도 기반 필터링으로 고유 색상 추출
5. **SVG 생성**: 각 파티클을 SVG circle 요소로 변환

## 🖼️ 내보내기 형식

- **SVG**: 벡터 그래픽 (무손실, 확장 가능)
- **PNG**: 2× 해상도, 투명 배경 지원
- **JPG**: 흰색 배경, 95% 품질

## 📄 라이선스

MIT License

## 👨‍💻 개발자

- GitHub: [@jiwonjae-svg](https://github.com/jiwonjae-svg)

---

Made with ❤️
