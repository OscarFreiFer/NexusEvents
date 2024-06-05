using System.ComponentModel.DataAnnotations;

namespace BE_NexusEvents.Models.DTO
{
    public class UserDTO
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public string? Email { get; set; }
    }

    public class UserEntity : UserDTO
    {
        public string Password { get; set; }
    }
}
