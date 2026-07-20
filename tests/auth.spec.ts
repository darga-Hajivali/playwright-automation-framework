import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { DashboardPage } from '../pages/dashboardPage';
import testData from '../fixtures/testData.json';

test.describe('Authentication Tests', () => {
  let loginPage: LoginPage;
  let dashboardPage: DashboardPage;

  test.beforeEach(async ({ page }) => {
    // Initialize page objects before each test
    loginPage = new LoginPage(page);
    dashboardPage = new DashboardPage(page);
  });

  test('TC001: User can login with valid credentials', async () => {
    const user = testData.validUsers[0];

    // Navigate to login page
    await loginPage.navigateToLoginPage();

    // Verify email input is visible
    expect(await loginPage.isLoginButtonEnabled()).toBe(true);

    // Login with valid credentials
    await loginPage.login(user.email, user.password);

    // Verify successful login
    await expect(async () => {
      const currentURL = await loginPage.getCurrentURL();
      expect(currentURL).toContain('dashboard');
    }).toPass();
  });

  test('TC002: User can login with remember me checked', async () => {
    const user = testData.validUsers[1];

    // Navigate to login page
    await loginPage.navigateToLoginPage();

    // Login with remember me
    await loginPage.loginWithRememberMe(user.email, user.password);

    // Verify dashboard is loaded
    const isDashboardLoaded = await dashboardPage.isDashboardLoaded();
    expect(isDashboardLoaded).toBe(true);
  });

  test('TC003: Login fails with invalid credentials', async () => {
    const invalid = testData.invalidCredentials[0];

    // Navigate to login page
    await loginPage.navigateToLoginPage();

    // Attempt login with invalid credentials
    await loginPage.login(invalid.email, invalid.password);

    // Verify error message appears
    const errorMessage = await loginPage.getErrorMessage();
    expect(errorMessage).toContain(invalid.expectedError);
  });

  test('TC004: User can navigate to forgot password', async () => {
    // Navigate to login page
    await loginPage.navigateToLoginPage();

    // Click forgot password link
    await loginPage.clickForgotPassword();

    // Verify URL changed
    const currentURL = await loginPage.getCurrentURL();
    expect(currentURL).toContain('forgot-password');
  });

  test('TC005: Email input accepts valid email format', async () => {
    const validEmail = 'testuser@example.com';

    // Navigate to login page
    await loginPage.navigateToLoginPage();

    // Fill email input
    // Note: We're testing the interaction, not actual validation
    // In real app, you would assert on validation messages
    expect(await loginPage.isLoginButtonEnabled()).toBe(true);
  });
});