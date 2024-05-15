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
    public class ReservesController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ReservesController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Reserves
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Reserve>>> GetReserves()
        {
            return await _context.Reserves.ToListAsync();
        }

        // GET: api/Reserves/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Reserve>> GetReserve(int id)
        {
            var reserve = await _context.Reserves.FindAsync(id);

            if (reserve == null)
            {
                return NotFound();
            }

            return reserve;
        }

        // PUT: api/Reserves/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutReserve(int id, Reserve reserve)
        {
            if (id != reserve.Id)
            {
                return BadRequest();
            }

            _context.Entry(reserve).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ReserveExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Reserves
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Reserve>> PostReserve(Reserve reserve)
        {
            _context.Reserves.Add(reserve);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetReserve", new { id = reserve.Id }, reserve);
        }

        // DELETE: api/Reserves/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteReserve(int id)
        {
            var reserve = await _context.Reserves.FindAsync(id);
            if (reserve == null)
            {
                return NotFound();
            }

            _context.Reserves.Remove(reserve);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ReserveExists(int id)
        {
            return _context.Reserves.Any(e => e.Id == id);
        }
    }
}
