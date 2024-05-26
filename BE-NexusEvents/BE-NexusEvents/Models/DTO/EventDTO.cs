using System.ComponentModel.DataAnnotations;

namespace BE_NexusEvents.Models.DTO
{
    public class EventDTO
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
    }

    public class EventEntity : EventDTO
    {
        public int UserID { get; set; }
        public int SpaceID { get; set; }
    }
}
