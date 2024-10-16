# newfrom_ai_react

AI 고객 서비스 페이지  


## Local Project Run
로컬에서 사용 시 CORS 방지를 위한 웹 서버 설정이 필요하다.  
api 통신 시 사용되는 경로 `/api`에 대한 프록시를 설정해준다.  
api 통신과 별개로 서버의 웹 소켓 통신 경로는 `/api/ws` 이므로 소켓통신을 위한 프록시 설정은 별도로 해야한다.

- Apache, Nginx 선택 후 설치
- 각 로컬 환경과 포트에 맞는 프록시 설정  