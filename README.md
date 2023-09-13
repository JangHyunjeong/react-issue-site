# React-issue-wep

- [github API](https://docs.github.com/ko/rest?apiVersion=2022-11-28)를 사용하여, Github 특정 Repository 이슈 목록과 상세 내용을 확인할 수 있습니다.

## 배포 주소

- https://react-issue-web.vercel.app/
 
## 사용기술

- 언어 : TypeScript
- 프레임워크 : React.js
- 통신 : axios
- 스타일링 : styled-components
- 마크다운 라이브러리 : [React-markdown](https://github.com/remarkjs/react-markdown)

## 상세 기능 설명

### 1. Infinity Scroll

- `Ref`와 `InterScetionObserver`를 사용하여 Infinity Scroll을 구현하였습니다.


### 2. 로딩중 컴포넌트

- 데이터 호출 오류 방지 및 호출 중 안내를 위해, 데이터를 응답 전 로딩중 컴포넌트를 삽입하였습니다.

### 3. 데이터 호출 실패/ 잘못된 주소 기입 시, 에러 컴포넌트 노출

- `try~catch`문을 사용하여 데이터 호출 실패시 에러 컴포넌트를 노출 시켜줍니다.
- `Route path='*` 를 추가하여 주소를 잘못 기입했을 경우, 에러 페이지로 이동합니다.
![에러](https://github.com/JangHyunjeong/react-issue-web/assets/85441226/1fa475fa-8117-446c-8937-abce84c4de4f)


### 4. 상세페이지에서는 깃허브 이슈 그대로의 `MarkDown`을 적용

- `React-markdown` 플러그인을 사용하여, 깃허브 이슈 그대로의 마크업을 확인할 수 있습니다.
  
![마크다운](https://github.com/JangHyunjeong/react-issue-web/assets/85441226/b10210d6-7db5-4d9b-8c63-9b44617f3ed8)

