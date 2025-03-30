FROM --platform=linux/amd64 mcr.microsoft.com/playwright:v1.51.0-jammy

WORKDIR /app

# Install dependencies
RUN apt-get update && DEBIAN_FRONTEND=noninteractive apt-get install -y \
    unzip \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Install Bun
RUN curl -fsSL https://bun.sh/install | bash \
    && mv /root/.bun/bin/bun /usr/local/bin/bun \
    && ln -s /usr/local/bin/bun /usr/local/bin/bunx

# Install LightPanda
RUN curl -L -o /usr/local/bin/lightpanda https://github.com/lightpanda-io/browser/releases/download/nightly/lightpanda-x86_64-linux \
    && chmod +x /usr/local/bin/lightpanda

# Copy package.json and config files first for better caching
COPY package.json playwright.config.ts tsconfig.json ./

# Install dependencies
RUN bun install

# Copy the rest of the files
COPY . .

# Install Playwright browsers
RUN bunx playwright install chromium firefox

# Default command (can be overridden by docker-compose)
CMD ["sh", "-c", "echo 'Please specify a command in docker-compose.yml'"]