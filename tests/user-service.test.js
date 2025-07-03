// Test file with various issues CodeRabbit should identify

const { UserService } = require('../src/csharp/UserService');
const { ApiClient } = require('../src/javascript/api-client');

describe('UserService Tests', () => {
    let userService;
    
    beforeEach(() => {
        userService = new UserService();
    });
    
    // Test with poor naming and no assertions
    test('test user stuff', () => {
        const users = userService.getAllUsers();
        // Missing assertions - test does nothing
    });
    
    // Test without proper setup/teardown
    test('should delete user', async () => {
        // Creating test data in production database - bad practice
        const testUser = await userService.createUser({
            name: 'Test User',
            email: 'test@example.com',
            role: 'admin'
        });
        
        userService.deleteUser(testUser.id);
        
        // No cleanup of test data
        // No assertion to verify deletion
    });
    
    // Test with hardcoded values and no mocking
    test('should get users by role', async () => {
        const adminUsers = await userService.getUsersByRole('admin');
        
        // Hardcoded assertion - fragile test
        expect(adminUsers.length).toBe(5);
        expect(adminUsers[0].name).toBe('John Admin');
    });
    
    // Test missing error case scenarios
    test('should handle database connection', () => {
        // Only testing happy path
        expect(userService.connectionString).toBeDefined();
    });
    
    // Test with side effects and no isolation
    test('should update user email', async () => {
        const user = await userService.getUserById(1);
        user.email = 'newemail@example.com';
        
        await userService.updateUser(user);
        
        // Test affects global state
        const updatedUser = await userService.getUserById(1);
        expect(updatedUser.email).toBe('newemail@example.com');
        
        // No restoration of original state
    });
});

describe('ApiClient Tests', () => {
    let apiClient;
    
    beforeAll(() => {
        // Missing mock setup
        apiClient = new ApiClient('https://api.example.com');
    });
    
    // Test making real HTTP calls
    test('should fetch users from API', async () => {
        // This will make real HTTP request - bad for tests
        const users = await apiClient.getUsers();
        
        expect(users).toBeDefined();
        // Flaky test - depends on external service
    });
    
    // Test without proper async handling
    test('should delete user', () => {
        const result = apiClient.deleteUser(123);
        
        // Missing await - test may pass before operation completes
        expect(result).toBeTruthy();
    });
    
    // Test with shared state between tests
    test('should search users', () => {
        // Relies on data from previous tests
        const results = apiClient.searchUsers('admin');
        expect(results.length).toBeGreaterThan(0);
    });
    
    // Test missing boundary conditions
    test('should handle empty search', () => {
        const results = apiClient.searchUsers('');
        // Missing tests for null, undefined, special characters
        expect(results).toBeDefined();
    });
});

// Global test setup without proper cleanup
beforeAll(() => {
    // Setting up global state that affects all tests
    global.testDatabase = 'test_db';
    process.env.NODE_ENV = 'test';
});

// Helper function with no error handling
function createTestUser(name, email) {
    return {
        id: Math.random() * 1000, // Non-deterministic ID
        name: name,
        email: email,
        role: 'user',
        createdAt: new Date() // Time-dependent data
    };
}

// Test data that could contain sensitive information
const testUsers = [
    {
        id: 1,
        name: 'Admin User',
        email: 'admin@company.com',
        password: 'password123', // Should not have real passwords in tests
        role: 'admin'
    },
    {
        id: 2,
        name: 'Regular User',
        email: 'user@company.com',
        ssn: '123-45-6789', // Should not have PII in test data
        role: 'user'
    }
]; 
Thursday, July 3, 2025 12:00:10 PM

