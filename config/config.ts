/**
 * Environment-specific configuration
 * Change environment via: ENVIRONMENT=dev npm test
 */

export interface TestConfig {
  baseURL: string;
  apiURL: string;
  timeout: number;
  retries: number;
  credentials: {
    email: string;
    password: string;
  };
}

export const getConfig = (environment: string): TestConfig => {
  const configs: Record<string, TestConfig> = {
    dev: {
      baseURL: 'https://dev.example.com',
      apiURL: 'https://api-dev.example.com',
      timeout: 10000,
      retries: 2,
      credentials: {
        email: 'dev-user@example.com',
        password: 'dev-password-123',
      },
    },
    staging: {
      baseURL: 'https://staging.example.com',
      apiURL: 'https://api-staging.example.com',
      timeout: 8000,
      retries: 1,
      credentials: {
        email: 'staging-user@example.com',
        password: 'staging-password-123',
      },
    },
    prod: {
      baseURL: 'https://example.com',
      apiURL: 'https://api.example.com',
      timeout: 5000,
      retries: 0,
      credentials: {
        email: 'prod-user@example.com',
        password: 'prod-password-123',
      },
    },
  };

  // Return dev config by default
  return configs[environment] || configs['dev'];
};

// Export config for current environment
const currentEnvironment = process.env.ENVIRONMENT || 'dev';
export const config = getConfig(currentEnvironment);