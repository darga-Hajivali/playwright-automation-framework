# Playwright Automation Framework

A **production-ready** test automation framework built with **Playwright**, **TypeScript**, and the **Page Object Model (POM)** pattern.

##  Overview

This framework demonstrates professional test automation practices including:
-  **Page Object Model (POM)** - Clean separation of concerns
-  **Data-Driven Testing** - External test data (JSON fixtures)
-  **TypeScript** - Type-safe, maintainable code
-  **Multi-Browser Testing** - Chrome, Firefox, WebKit
-  **Comprehensive Reporting** - HTML reports, screenshots, videos
-  **Best Practices** - Error handling, logging, utilities

##  Features

### Framework Architecture
- **Page Objects:** Encapsulate UI elements and interactions
- **Base Page:** Common methods inherited by all page objects
- **Test Fixtures:** External JSON files for test data
- **Utilities:** Reusable helper functions
- **Configuration:** Environment-specific settings (dev/staging/prod)

### Testing Capabilities
- End-to-end (E2E) web application testing
- Cross-browser compatibility testing
- Data-driven test execution
- Parallel test execution
- Automatic screenshots on failure
- Video recording of failed tests

### Browser Support
-  **Chromium** (Chrome, Edge)
-  **Firefox**
-  **WebKit** (Safari)

##  Quick Start

### Prerequisites
- **Node.js** 16+ installed
- **npm** (comes with Node.js)
- **Git** installed

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/darga-Hajivali/playwright-automation-framework.git
cd playwright-automation-framework

# 2. Install dependencies
npm install

# 3. Install Playwright browsers
npx playwright install

# 4. Verify installation
npm test -- --list