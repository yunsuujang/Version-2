# Yunsu Portfolio v4 적용 방법

이 버전은 보고서 PDF가 포함되어 있으므로 GitHub 웹 업로드보다 **GitHub Desktop** 사용을 권장합니다.

## 1. 압축 해제

`yunsu-portfolio-v4.zip`을 다운로드하고 압축을 풉니다.

## 2. GitHub 저장소 폴더 열기

GitHub Desktop에서 `yunsuujang/Yunsu` 저장소를 선택한 뒤:

```text
Repository → Show in Explorer
```

를 누릅니다.

## 3. 파일 덮어쓰기

압축을 푼 `yunsu-portfolio-v4` 폴더 **안에 있는 모든 항목**을 로컬 `Yunsu` 저장소 폴더에 복사합니다.

정상 구조:

```text
Yunsu/
├── app/
├── components/
├── data/
├── public/
├── package.json
└── tsconfig.json
```

잘못된 구조:

```text
Yunsu/yunsu-portfolio-v4/app/
```

동일한 파일을 교체할지 묻는 경우 `Replace`를 선택합니다.

## 4. GitHub에 반영

GitHub Desktop에서 다음을 입력합니다.

```text
Summary: Update portfolio to v4
```

그다음:

```text
Commit to main
Push origin
```

을 차례로 누릅니다.

## 5. Vercel 확인

Push 후 Vercel이 자동으로 새 배포를 시작합니다. Build Log 마지막에 아래가 표시되면 정상입니다.

```text
Compiled successfully
Generating static pages
Deployment completed
```

## 주요 수정 파일

```text
data/site.ts                 개인 소개, 연락처, 학력, 경력, 기술
data/projects.ts             프로젝트 제목, 요약, 결과, 도구, 보고서 링크
app/page.tsx                 홈페이지 구조
components/ProjectCard.tsx   프로젝트 카드 구조
app/projects/[slug]/page.tsx 프로젝트 상세 페이지
app/globals.css              색상, 간격, 타이포그래피, 전체 디자인
```

## 이미지와 PDF 위치

```text
public/images/yunsu-jang.jpg
public/images/project-*.jpg
public/downloads/yunsu-jang-resume.pdf
public/reports/*.pdf
public/reference-letters/*.pdf
```

같은 파일명을 유지해서 교체하면 코드를 수정하지 않아도 됩니다.
