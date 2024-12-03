# node 이미지 기반 Docker 이미지 생성
FROM node:20.18.0

# 작업 디렉토리 설정
WORKDIR /app

# COPY <복사할 경로/파일명> <붙여넣을 디렉토리>
COPY package*.json .

# 의존성 설치 명령어 실행, 여기서 렉이 걸릴수도
# 처음은 시간 오래 걸리니까, 맘 비우고 딴 일 하다 오삼, 난 10분 걸렸낭?
# 2번째 부터는 빠름
RUN npm install --verbose
# 현재 디렉토리의 모든 파일을 도커 컨테이너의 작업 디렉토리에 복사
COPY . .

EXPOSE 8888

# npm run dev  스크립트 실행
CMD ["npm","run","dev"]