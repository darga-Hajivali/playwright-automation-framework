import { APIRequestContext } from '@playwright/test';

export class APIClient {
  private baseURL: string;
  private request: APIRequestContext;
  private token: string = '';

  constructor(request: APIRequestContext, baseURL: string) {
    this.request = request;
    this.baseURL = baseURL;
  }

  /**
   * Login and get authentication token
   */
  async login(email: string, password: string): Promise<string> {
    try {
      const response = await this.request.post(`${this.baseURL}/auth/login`, {
        data: {
          email,
          password,
        },
      });

      if (!response.ok()) {
        throw new Error(`Login failed: ${response.status()}`);
      }

      const data = await response.json();
      this.token = data.token;
      return this.token;
    } catch (error) {
      console.error('Login API failed:', error);
      throw error;
    }
  }

  /**
   * Get user profile
   */
  async getUserProfile(): Promise<any> {
    try {
      const response = await this.request.get(`${this.baseURL}/api/users/profile`, {
        headers: {
          'Authorization': `Bearer ${this.token}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok()) {
        throw new Error(`Get profile failed: ${response.status()}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Get profile API failed:', error);
      throw error;
    }
  }

  /**
   * Update user profile
   */
  async updateUserProfile(userData: any): Promise<any> {
    try {
      const response = await this.request.put(`${this.baseURL}/api/users/profile`, {
        data: userData,
        headers: {
          'Authorization': `Bearer ${this.token}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok()) {
        throw new Error(`Update profile failed: ${response.status()}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Update profile API failed:', error);
      throw error;
    }
  }

  /**
   * Get all users (admin only)
   */
  async getAllUsers(): Promise<any[]> {
    try {
      const response = await this.request.get(`${this.baseURL}/api/users`, {
        headers: {
          'Authorization': `Bearer ${this.token}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok()) {
        throw new Error(`Get users failed: ${response.status()}`);
      }

      const data = await response.json();
      return data.users || [];
    } catch (error) {
      console.error('Get users API failed:', error);
      throw error;
    }
  }

  /**
   * Create new user
   */
  async createUser(userData: any): Promise<any> {
    try {
      const response = await this.request.post(`${this.baseURL}/api/users`, {
        data: userData,
        headers: {
          'Authorization': `Bearer ${this.token}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.status() !== 201) {
        throw new Error(`Create user failed: ${response.status()}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Create user API failed:', error);
      throw error;
    }
  }

  /**
   * Delete user
   */
  async deleteUser(userId: string): Promise<void> {
    try {
      const response = await this.request.delete(`${this.baseURL}/api/users/${userId}`, {
        headers: {
          'Authorization': `Bearer ${this.token}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.status() !== 204 && !response.ok()) {
        throw new Error(`Delete user failed: ${response.status()}`);
      }
    } catch (error) {
      console.error('Delete user API failed:', error);
      throw error;
    }
  }

  /**
   * Get API response status
   */
  getToken(): string {
    return this.token;
  }

  /**
   * Clear token (logout)
   */
  clearToken(): void {
    this.token = '';
  }
}