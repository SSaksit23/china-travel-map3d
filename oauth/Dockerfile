FROM node:22-alpine
WORKDIR /app
COPY server.js .
# Cloud Run injects PORT (defaults to 8080); server.js listens on it.
ENV PORT=8080
CMD ["node", "server.js"]
