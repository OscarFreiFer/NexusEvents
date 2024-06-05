using System.ComponentModel.DataAnnotations;

namespace BE_NexusEvents.Models.DTO
{
    public class EventDTO
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public string? ImageUrl { get; set; }
    }

    public class EventEntity : EventDTO
    {
        public int UserID { get; set; }
        public int SpaceID { get; set; }
        public Space Space { get; set; }
    }
}
