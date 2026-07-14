FROM node:22-alpine AS base
WORKDIR /app

COPY apps/backend/package*.json ./
RUN npm ci --omit=dev

COPY apps/backend/src ./src
COPY apps/backend/assets ./assets

ENV NODE_ENV=production
ENV PORT=4000
EXPOSE 4000

CMD ["npm", "run", "start"]
