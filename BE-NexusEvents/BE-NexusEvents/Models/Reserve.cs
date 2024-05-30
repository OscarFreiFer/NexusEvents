using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BE_NexusEvents.Models
{
    public class Reserve
    {
        public int Id { get; set; }

        [ForeignKey("Space")]
        public int SpaceId { get; set; }
        public Space Space { get; set; }

        [ForeignKey("User")]
        public int UserId { get; set; }
        public User User { get; set; }

        public int EventId { get; set; }

        public DateTime CreatedDate { get; set; }

    }
}
