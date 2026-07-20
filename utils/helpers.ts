export class TestHelpers {
  /**
   * Generate a random email address
   * Useful for creating unique test accounts
   */
  static generateRandomEmail(): string {
    const timestamp = Date.now();
    return `testuser_${timestamp}@example.com`;
  }

  /**
   * Generate a random name
   * Useful for test data
   */
  static generateRandomName(): string {
    const firstNames = ['John', 'Jane', 'Bob', 'Alice', 'Michael', 'Sarah'];
    const lastNames = ['Doe', 'Smith', 'Johnson', 'Williams', 'Brown', 'Davis'];

    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];

    return `${firstName} ${lastName}`;
  }

  /**
   * Get a future date
   * Useful for date-based testing
   */
  static getFutureDate(daysFromNow: number): string {
    const date = new Date();
    date.setDate(date.getDate() + daysFromNow);
    return date.toISOString().split('T')[0]; // Returns YYYY-MM-DD
  }

  /**
   * Get current date
   */
  static getCurrentDate(): string {
    return new Date().toISOString().split('T')[0];
  }

  /**
   * Delay execution (useful for waiting)
   */
  static delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  /**
   * Generate random password
   */
  static generateRandomPassword(): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%';
    let password = '';
    for (let i = 0; i < 12; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
  }

  /**
   * Validate email format
   */
  static isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}