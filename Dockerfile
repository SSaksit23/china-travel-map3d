# syntax=docker/dockerfile:1

# --- Stage 1: build the static SPA ---
FROM node:20-alpine AS build
WORKDIR /app

# Install dependencies against the committed lockfile for reproducible builds.
COPY package.json package-lock.json ./
RUN npm ci

# Build the app (tsc --noEmit && vite build). All route/image/weather/hotel
# data is committed JSON, so no network/API access is required here.
COPY . .
RUN npm run build

# --- Stage 2: serve with nginx ---
FROM nginx:alpine AS serve
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
