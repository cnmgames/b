# Stage 1: Build stage
FROM node:20-alpine AS builder
RUN corepack enable && corepack prepare pnpm@latest --activate
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile
COPY . .
RUN pnpm build

# Stage 2: Production stage
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

# 1. 确保使用了 standalone 输出 (确保有 next.config.mjs)
COPY --from=builder /app/next.config.mjs ./

# 2. 复制 standalone 输出
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

# 3. 使用 standalone 的启动命令
EXPOSE 3000
CMD ["node", "server.js"]
