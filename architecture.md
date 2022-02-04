Tweet API

로그인,로그아웃, oAtuh는 생략
전체적인 트위터 기능 설계해보기

Schema
tweet : {
id: tweet idx
text:
user_id:
created_date
updated_date
}

1. 트윗 리스트 출력 -> GET
2. 특정 유저 트윗 리스트 출력 -> GET
3. 트윗 쓰기 -> POST
4. 트윗 수정하기 -> PUT
5. 내가 쓴 트윗 리스트 보기 -> GET/:id
6. 트윗 삭제 -> DELETE

GET
: 리스트 전체 가져오기

POST

PUT

DELETE
