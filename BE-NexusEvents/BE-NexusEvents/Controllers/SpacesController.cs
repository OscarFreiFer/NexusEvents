using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BE_NexusEvents.Context;
using BE_NexusEvents.Models;

namespace BE_NexusEvents.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SpacesController : ControllerBase
    {
        private readonly AppDbContext _context;

        public SpacesController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Spaces/spaceType
        [HttpGet("bySpaceType/{spaceType}")]
        public async Task<ActionResult<IEnumerable<Space>>> GetSpaces(int spaceType)
        {
            return await _context.Spaces.Where(s => s.SpaceType == spaceType).ToListAsync();
        }

        // GET: api/Spaces/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Space>> GetSpace(int id)
        {
            var space = await _context.Spaces.FindAsync(id);

            if (space == null)
            {
                return NotFound();
            }

            return space;
        }


        // POST: api/Spaces
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Space>> PostSpace(Space space)
        {
            _context.Spaces.Add(space);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetSpace", new { id = space.Id }, space);
        }

        // DELETE: api/Spaces/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSpace(int id)
        {
            var space = await _context.Spaces.FindAsync(id);
            if (space == null)
            {
                return NotFound();
            }

            _context.Spaces.Remove(space);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
