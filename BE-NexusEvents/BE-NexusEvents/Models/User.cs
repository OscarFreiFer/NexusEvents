using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BE_NexusEvents.Models
{
    public class User
    {
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        [DataType(DataType.Password)]
        [MinLength(6 , ErrorMessage = "La contraseña no cumple los requisitos.")]
        public string Password { get; set; }

        [Required]
        [DataType(DataType.EmailAddress)]
        [EmailAddress(ErrorMessage = "Correo electrónico inválido.")]
         
        public string Email { get; set; }
        public DateTime CreatedDate { get; set; }

    }
}
