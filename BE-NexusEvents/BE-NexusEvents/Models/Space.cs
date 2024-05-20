using System.ComponentModel.DataAnnotations;

namespace BE_NexusEvents.Models
{
    public class Space
    {
        public int Id { get; set; }
        [Required]
        public int SpaceType { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Ubication { get; set; }
        public string Address { get; set; }
        public int MaxCapacity { get; set; }

        [DataType(DataType.ImageUrl)]
        public string ImageUrl { get; set; }

    }
}
