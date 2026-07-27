# Yunsu Portfolio v2 업데이트 가이드

## 1. 가장 안전한 업로드 방법: GitHub Desktop

1. 이 ZIP 파일을 다운로드하고 압축을 풉니다.
2. GitHub Desktop에서 `yunsuujang/Yunsu` 저장소를 엽니다.
3. 상단 메뉴에서 **Repository → Show in Explorer**를 선택합니다.
4. 압축을 푼 `yunsu-portfolio-v2` 폴더 안의 모든 항목을 선택합니다.
5. GitHub 저장소의 로컬 `Yunsu` 폴더에 붙여넣고, 같은 이름의 파일은 **Replace**합니다.
6. GitHub Desktop으로 돌아갑니다.
7. Summary에 `Update portfolio content and documents`를 입력합니다.
8. **Commit to main**을 누른 뒤 **Push origin**을 누릅니다.
9. Vercel이 자동으로 새 배포를 시작합니다.

중요: `yunsu-portfolio-v2` 폴더 자체를 `Yunsu` 폴더 안에 넣지 마십시오. `app`, `components`, `data`, `public`, `package.json`이 모두 저장소 최상위에 있어야 합니다.

## 2. 이번 버전에서 변경된 핵심 파일

### 콘텐츠
- `data/site.ts`: 소개, 키워드, 연락처, 학력, 경력, 기술
- `data/projects.ts`: 6개 프로젝트의 요약, 방법, 결과, 다운로드 링크

### 화면 구조
- `app/page.tsx`: 사진형 Hero, 프로젝트 목록, 연락처, 경력
- `app/projects/[slug]/page.tsx`: 프로젝트 상세 내용과 보고서 다운로드
- `app/resume/page.tsx`: 웹 이력서, PDF 이력서 및 추천서 다운로드

### 디자인
- `app/globals.css`: Hero 제목 크기, 강조 표시, 사진, 프로젝트 그리드, 다운로드 버튼
- `components/ProjectCard.tsx`: 프로젝트별 보고서 다운로드
- `components/SiteFooter.tsx`: 전화번호와 LinkedIn
- `components/Icons.tsx`: 전화, LinkedIn, 다운로드 아이콘

### 공개 파일
- `public/images/yunsu-jang.jpg`: 프로필 사진
- `public/downloads/yunsu-jang-resume.pdf`: 이력서
- `public/reports/`: 공개 가능한 프로젝트 보고서
- `public/reference-letters/`: P3 Korea 및 Siemens Energy 추천서

## 3. 이후 직접 수정할 위치

### Hero 문구
`data/site.ts`

```ts
heroEyebrow: "Urban planning · Building energy · Sustainability",
heroTitle: "Planning sustainable cities and energy-efficient buildings through evidence-based design.",
heroDescription: "...",
```

### 연락처
`data/site.ts`의 `email`, `phones`, `linkedin`을 수정합니다.

### 프로젝트 내용
`data/projects.ts`에서 해당 프로젝트의 `summary`, `overview`, `stats`, `approach`, `outcomes`, `reflection`을 수정합니다.

### 제목 글자 크기
`app/globals.css`의 다음 부분입니다.

```css
.hero-copy h1 {
  font-size: calc(1rem + 4pt);
}
```

### 강조 표시
같은 파일의 `.hero-copy h1 span` 배경 설정을 수정합니다.

## 4. 공개 전 개인정보 확인

현재 첨부된 이력서 PDF에는 상세 주소가 포함되어 있습니다. P3 Korea 및 Siemens Energy 추천서에는 생년월일과 회사 정보가 포함되어 있을 수 있습니다. 공개 포트폴리오에 올리기 전에 주소와 생년월일을 가린 별도 공개용 PDF로 교체하는 것을 권장합니다.

Zaanstad Green Infrastructure 보고서는 보고서 자체에 원본 이미지의 기밀 유지 조건이 명시되어 있어 공개 다운로드 파일로 포함하지 않았습니다. 프로젝트 페이지에는 `Full report available on request`로 표시됩니다.
