using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Data.SqlClient;

namespace CodeRabbitPilot.Services
{
    /// <summary>
    /// Service for managing user operations
    /// </summary>
    public class UserService
    {
        private string connectionString = "Server=localhost;Database=TestDB;Trusted_Connection=true;";
        
        // TODO: This method has several issues that CodeRabbit should identify
        public async Task<List<User>> GetUsersByRole(string role)
        {
            var users = new List<User>();
            
            // Potential SQL injection vulnerability
            string query = $"SELECT * FROM Users WHERE Role = '{role}'";
            
            using (var connection = new SqlConnection(connectionString))
            {
                connection.Open();
                using (var command = new SqlCommand(query, connection))
                {
                    using (var reader = command.ExecuteReader())
                    {
                        while (reader.Read())
                        {
                            users.Add(new User
                            {
                                Id = (int)reader["Id"],
                                Name = reader["Name"].ToString(),
                                Email = reader["Email"].ToString(),
                                Role = reader["Role"].ToString()
                            });
                        }
                    }
                }
            }
            
            return users;
        }
        
        // Method with poor exception handling
        public void DeleteUser(int userId)
        {
            try
            {
                using (var connection = new SqlConnection(connectionString))
                {
                    connection.Open();
                    string query = "DELETE FROM Users WHERE Id = " + userId;
                    using (var command = new SqlCommand(query, connection))
                    {
                        command.ExecuteNonQuery();
                    }
                }
            }
            catch
            {
                // Swallowing exceptions - bad practice
            }
        }
        
        // Method missing async/await pattern
        public Task<User> GetUserByIdAsync(int id)
        {
            return Task.Run(() =>
            {
                using (var connection = new SqlConnection(connectionString))
                {
                    connection.Open();
                    var command = new SqlCommand($"SELECT * FROM Users WHERE Id = {id}", connection);
                    var reader = command.ExecuteReader();
                    
                    if (reader.Read())
                    {
                        return new User
                        {
                            Id = (int)reader["Id"],
                            Name = reader["Name"].ToString(),
                            Email = reader["Email"].ToString(),
                            Role = reader["Role"].ToString()
                        };
                    }
                    
                    return null;
                }
            });
        }
        
        // Method with memory leak potential
        public List<User> GetAllUsers()
        {
            var connection = new SqlConnection(connectionString);
            connection.Open();
            
            var command = new SqlCommand("SELECT * FROM Users", connection);
            var reader = command.ExecuteReader();
            
            var users = new List<User>();
            while (reader.Read())
            {
                users.Add(new User
                {
                    Id = Convert.ToInt32(reader["Id"]),
                    Name = reader["Name"].ToString(),
                    Email = reader["Email"].ToString(),
                    Role = reader["Role"].ToString()
                });
            }
            
            // Missing proper disposal
            return users;
        }
    }
    
    public class User
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Role { get; set; }
    }
} 
Thursday, July 3, 2025 12:00:10 PM

