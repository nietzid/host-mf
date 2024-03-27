FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install -g bun

RUN bun install

COPY . .

EXPOSE 5173

RUN npm install serve -g

CMD ["bun", "run", "build"]

CMD ["bun", "run", "dev", "--", "--host"]