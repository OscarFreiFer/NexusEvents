using BE_NexusEvents.Models.DTO;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BE_NexusEvents.Models
{
    public class Event
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Description { get; set; }
        [Required]
        public DateTime StartDate { get; set; }
        [Required]
        public DateTime EndDate { get; set; }
        public string? ImageUrl { get; set; }

        [ForeignKey("User")]
        public int UserID { get; set; }

        [ForeignKey("Space")]
        public int SpaceID { get; set; }
        public Space Space { get; set; }

        public DateTime CreatedDate { get; set; }
    }
}
