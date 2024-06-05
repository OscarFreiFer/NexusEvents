using System.ComponentModel.DataAnnotations;

namespace BE_NexusEvents.Models.DTO
{
    public class LoginDTO
    {
        public string Password { get; set; }
        public string Email { get; set; }
    }

    public class LoginRegisterResponse
    {
        public string Token { get; set; }
        public long Id { get; set; }
    }
}
