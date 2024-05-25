using System.ComponentModel.DataAnnotations;

namespace BE_NexusEvents.Models.DTO
{
    public class LoginDTO
    {

        [Required]
        [DataType(DataType.Password)]
        [MinLength(6)]
        public string Password { get; set; }

        [Required]
        [DataType(DataType.EmailAddress)]
        [EmailAddress(ErrorMessage = "Correo electrónico inválido.")]
        public string Email { get; set; }
    }

    public class LoginRegisterResponse
    {
        public string Token { get; set; }
        public long Id { get; set; }
    }
}
