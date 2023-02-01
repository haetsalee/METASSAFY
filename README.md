D211ER

팀장 : 오주영 🍀
팀원1 : 윤소현 🎸
팀원2 : 이시준 💎
팀원3 : 이석원 🌚
팀원4 : 이햇살 🌞
팀원5 : 최지원 🪑

```
GIT branch convention
Branch 종류

- main
    - 배포 가능한 상태의 결과물
- develop
    - 구현한 기능을 병합하기 위한 브랜치
    - 통합 폴더의 기능
- feature
    - 개별 기능 구현 브랜치
    - 기능 개발 완료 시 삭제
    - 네이밍 규칙
        - feat/파트/기능
        - feat/fe/login
        - feat/be/login

Merge 관련

- MR은 Git lab을 통해 요청 및 수락
- MR시
    - title : merge하려는 브랜치 이름
    - description : 비우기
    - 머지 후 브랜치 삭제
```

````
GIT commit convention
- 개괄
    - 모든 커밋 메시지는 `한글` 로 작성
- 구조
    - 기본적으로 커밋 메시지는 아래와 같이 제목/본문/꼬리말로 구성

    ```jsx
    type : subject

    body

    footer
    ```

- 커밋 타입(Type)
    - feat : 새로운 기능 추가
    - fix : 버그 수정
    - docs: 문서 내용 변경
        - 예시
            - "fix" --> ''[BE] fix'
    - study: 공부
    - settings: 환경설정
    - style: 포맷, 세미콜론 수정 등 코드가 아닌 스타일에 관련된 수정
    - refactor: 리팩토링 코드
    - test: 테스트 코드 추가 및 리팩토링 테스트 등
    - chore: build task 수정, 프로젝트 매니저 설정 수정 등
    - 타입은 소문자로 시작
    - 타입은 항상 대괄호 안에 파트를 입력하여 시작
- 제목(Subject)
    - 제목은 50자 이내로, 대문자로 시작하며 모두 소문자로 작성
    - 파일명의 경우에는 대소문자 고려하지 않음
    - 마침표로 끝나지 않도록 함
    - 과거시제를 사용하지 않고 명령어로 작성
    - 예시
        - "feat : Logined" --> "feat : Login"
        - "feat : Added" --> "feat : Add"
- 본문(Body)
    - 선택사항
    - 부연 설명 필요 시 작성
    - 100자 미만 작성 권장
- 꼬리말(Footer)
    - 선택사항
    - issue tracker id를 작성할 때 사용
    - JIRA Code 작성 시 사용
- 예시

    ```jsx
    [feat] Login DEsign.py

    한글한글한글 설명쓰기
    - 영어말고 한글로
    - 선택사항

    JIRA Code : S08P11D211-10

    ```
````

```
Jira Convention
- 단위
    - Epic
        - Story
        - Task
- Epic
    - 가장 큰 단위
    - 하나의 기능 및 제공되는 서비스 목록
    - 네이밍 규칙
        - 명사로 마무리
        - 맨 앞에 대괄호를 사용해 카테고리 설정(영어의 경우 대문자로)
    - Story point는 0
    - Epic Name과 Summary는 동일하게
    - 예시
        - [DEV] 사용자 API
        - [PLN] 기획
        - [DSN] 디자인
        - [TEST] 사용자 API
        - [STUDY] 학습
        - [ETC] 팀 기술 블로그
- Story
    - Epic과 관련한 개발 외적인 업무
    - 네이밍 규칙
        - 명사로 마무리
        - 맨 앞에 대괄호를 사용해 카테고리 설정(영어의 경우 대문자로)
    - 최대 Story point는 4
    - 예시
        - [공통] PPT 작성
        - [공통] 포팅 메뉴얼 작성
- Task
    - Epic 기능에 해당하는 개발 업무
    - 네이밍 규칙
        - 명사로 마무리
        - 맨 앞에 대괄호를 사용해 카테고리 설정(영어의 경우 대문자로)
        - 구체적인 구현 예정 기능 명시
    - 최대 Story point는 4
    - 예시
        - [BE] 사용자 조회 API
        - [FE] 마이페이지 D-day 연동
        - [공통] 프론트 백 연동
```
