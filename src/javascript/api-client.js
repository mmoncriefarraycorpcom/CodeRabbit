// API Client for user management
// This file contains several issues that CodeRabbit should identify

class ApiClient {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
        this.token = localStorage.getItem('authToken'); // Security concern
    }
    
    // Method with poor error handling and security issues
    async getUsers(filters) {
        const url = this.baseUrl + '/users?' + this.buildQueryString(filters);
        
        try {
            const response = await fetch(url, {
                headers: {
                    'Authorization': 'Bearer ' + this.token,
                    'Content-Type': 'application/json'
                }
            });
            
            const data = response.json(); // Missing await
            return data;
        } catch (error) {
            console.log('Error:', error); // Should use proper logging
            return null; // Returning null on error is problematic
        }
    }
    
    // Method with XSS vulnerability
    renderUserList(users, containerId) {
        const container = document.getElementById(containerId);
        let html = '<ul>';
        
        for (let i = 0; i < users.length; i++) {
            // Direct HTML injection - XSS vulnerability
            html += `<li>${users[i].name} - ${users[i].email}</li>`;
        }
        
        html += '</ul>';
        container.innerHTML = html; // Dangerous - should use textContent or sanitization
    }
    
    // Method with improper promise handling
    deleteUser(userId) {
        fetch(this.baseUrl + '/users/' + userId, {
            method: 'DELETE',
            headers: {
                'Authorization': 'Bearer ' + this.token
            }
        }).then(response => {
            if (response.ok) {
                alert('User deleted successfully'); // Should not use alert
            }
        }); // Missing error handling
    }
    
    // Method with performance issues
    searchUsers(searchTerm) {
        const allUsers = this.getAllUsers(); // Fetches all data every time
        
        const results = [];
        for (let i = 0; i < allUsers.length; i++) {
            if (allUsers[i].name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                allUsers[i].email.toLowerCase().includes(searchTerm.toLowerCase())) {
                results.push(allUsers[i]);
            }
        }
        
        return results;
    }
    
    // Method with callback hell
    updateUserProfile(userId, profileData, successCallback, errorCallback) {
        this.validateUserData(profileData, (isValid) => {
            if (isValid) {
                this.checkUserPermissions(userId, (hasPermission) => {
                    if (hasPermission) {
                        this.updateUser(userId, profileData, (result) => {
                            if (result.success) {
                                this.logActivity('USER_UPDATED', userId, (logResult) => {
                                    successCallback(result);
                                });
                            } else {
                                errorCallback('Update failed');
                            }
                        });
                    } else {
                        errorCallback('No permission');
                    }
                });
            } else {
                errorCallback('Invalid data');
            }
        });
    }
    
    // Utility method with potential issues
    buildQueryString(params) {
        let query = '';
        for (const key in params) {
            if (params.hasOwnProperty(key)) {
                // Should encode parameters to prevent injection
                query += key + '=' + params[key] + '&';
            }
        }
        return query.slice(0, -1); // Remove last &
    }
    
    // Method without proper input validation
    createUser(userData) {
        // No validation of required fields
        return fetch(this.baseUrl + '/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.token
            },
            body: JSON.stringify(userData) // No validation or sanitization
        });
    }
    
    // Global variable usage - bad practice
    var currentUser = null;
    
    // Method with mixed ES5/ES6 syntax
    getAllUsers: function() {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest(); // Should use fetch
            xhr.open('GET', this.baseUrl + '/users');
            xhr.setRequestHeader('Authorization', 'Bearer ' + this.token);
            
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        resolve(JSON.parse(xhr.responseText));
                    } else {
                        reject(new Error('Request failed'));
                    }
                }
            };
            
            xhr.send();
        });
    }
}

// Export without proper module system
window.ApiClient = ApiClient; 