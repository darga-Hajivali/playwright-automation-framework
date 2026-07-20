# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: auth.spec.ts >> Authentication Tests >> TC001: User can login with valid credentials
- Location: tests\auth.spec.ts:16:7

# Error details

```
Error: page.goto: Target page, context or browser has been closed
Call log:
  - navigating to "https://example.com/login", waiting until "load"

```

```
Error: browserContext.close: Target page, context or browser has been closed
```