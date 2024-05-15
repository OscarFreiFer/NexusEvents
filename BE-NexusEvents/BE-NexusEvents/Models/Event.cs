using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BE_NexusEvents.Models
{
    public class Event
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        public string Description { get; set; }
        public DateTime DateTime { get; set; }

        [ForeignKey("User")]
        public int UserID { get; set; }
        public User User { get; set; } // Navigation property

        [ForeignKey("Space")]
        public int SpaceID { get; set; }
        public Space Space { get; set; }

        public DateTime CreatedDate { get; set; }
    }
}
