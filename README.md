# Playwright Test Automation Framework

A modern end-to-end testing framework built with Playwright, TypeScript, and Page Object Model pattern. Features parallel test execution, Docker support, and LightPanda integration for faster testing.

## Tech Stack

- **Test Framework**: Playwright
- **Language**: TypeScript
- **Pattern**: Page Object Model (POM)
- **Browsers**:
  - LightPanda (headless, ultra-fast)
  - Chromium
  - Firefox
  - WebKit
- **Runtime**: Bun
- **CI/CD**: GitHub Actions
- **Containerization**: Docker

## Features

- Page Object Model implementation
- Parallel test execution with sharding
- Docker containerization
- Multiple browser support
- GitHub Actions integration
- Test reporting
- Type-safe fixtures
- Configurable test environments

## Project Structure
```bash
├── app/
│ └── index.ts # Application entry point
├── pages/
│ └── login.page.ts # Page objects
├── fixtures/
│ └── base.ts # Test fixtures
├── tests/
│ └── login.test.ts # Test files
├── playwright.config.ts # Playwright configuration
└── docker-compose.yml # Docker configuration
```

## Running Tests

### Local Setup

1. Install dependencies:
```bash
bun install
```

2. Install browsers:
```bash
bunx playwright install
```

3. Run tests:
```bash
# Run all tests
bun test

# Run specific browser tests
bun test:lightpanda
bun test:chromium
bun test:firefox

# Run with UI for debugging
bun test:ui

# Run in headed mode
bun test:headed

# Run with debugger
bun test:debug
```

### Docker Setup

1. Start LightPanda container:
```bash
docker compose up lightpanda -d
```

2. Run tests:
```bash
docker compose up tests
```

### CI/CD

Tests automatically run on GitHub Actions:
- On push to main branch
- On pull requests
- With test sharding for parallel execution
- Using both LightPanda and traditional browsers

## Configuration

- `playwright.config.ts`: Main Playwright configuration
- `docker-compose.yml`: Docker services configuration
- `.github/workflows/playwright.yml`: CI/CD configuration

## Test Reports

Test reports are automatically generated and can be found in:
- `playwright-report/` directory
- GitHub Actions artifacts (when running in CI)

## Best Practices

- Use Page Object Model for maintainability
- Write atomic tests
- Use TypeScript for type safety
- Implement proper test isolation
- Use fixtures for common setup/teardown