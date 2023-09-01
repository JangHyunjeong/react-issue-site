# React-issue-wep

- github API를 사용하여, Facebook/React Repository 이슈 목록과 상세 내용을 확인할 수 있습니다.

## 사용기술

- 언어 : TypeScript
- 프레임워크 : React.js
- 통신 : axios
- 스타일링 : styled-components
- 마크다운 라이브러리 : React-markdown

## 배포 주소

- https://react-issue-web.vercel.app/

## 데모영상

## 주요기능

1. Infinity Scroll

- `Ref`와 `InterScetionObserver`를 사용하여 Infinity Scroll을 구현하였습니다.

2. 로딩중 컴포넌트

- 데이터 호출 오류 방지 및 호출 중 안내를 위해, 데이터를 응답 전 로딩중 컴포넌트를 삽입하였습니다.

3. 데이터 호출 실패시, 에러 컴포넌트 노출

- `try~catch`문을 사용하여 데이터 호출 실패시 에러 컴포넌트를 노출 시켜줍니다.

3. 상세페이지에서는 깃허브 이슈 그대로의 `MarkDown`을 적용

- 마크다운에는 `React-markdown` 플러그인을 사용하였습니다.
