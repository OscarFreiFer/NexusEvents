using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BE_NexusEvents.Context;
using BE_NexusEvents.Models;
using BE_NexusEvents.Models.DTO;

namespace BE_NexusEvents.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EventsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public EventsController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Events
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Event>>> GetEvents()
        {
            return await _context.Events.ToListAsync();
        }

        // GET: api/Events/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Event>> GetEvent(int id)
        {
            var @event = await _context.Events.FindAsync(id);

            if (@event == null)
            {
                return NotFound();
            }

            return @event;
        }

        [HttpGet("dates/{spaceId}")]
        public ActionResult<IEnumerable<EventsDatesDTO>> GetEventDates(long spaceId)
        {
            var eventDates = _context.Events
                .Where(e => e.SpaceID == spaceId)
                .Select(e => new EventsDatesDTO
                {
                    StartDate = e.StartDate,
                    EndDate = e.EndDate
                })
                .ToList();

            return Ok(eventDates);
        }


        // GET: api/Events/User/{userId}
        [HttpGet("User/{userId}")]
        public async Task<ActionResult<IEnumerable<FullEventEntity>>> GetEventsByUserId(int userId)
        {
            var events = await _context.Events
                .Include(e => e.Space)
                .Where(e => e.UserID == userId)
                .ToListAsync();

            if (events == null || !events.Any())
            {
                return NotFound();
            }

            return Ok(events);
        }

        // PUT: api/Events/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEvent(int id, Event @event)
        {
            if (id != @event.Id)
            {
                return BadRequest();
            }

            _context.Entry(@event).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EventExists(id))
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

        // POST: api/Events
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<EventEntity>> PostEvent(EventEntity eventEntity)
        {
            //Como voy a modificar dos tablas lo hago con una transacción por si falla una de las 2 que no se cree.
            using var transaction = await _context.Database.BeginTransactionAsync();
            try
            {
                var eventModel = new Event
                {
                    Name = eventEntity.Name,
                    StartDate = eventEntity.StartDate.AddDays(1),
                    EndDate = eventEntity.EndDate.AddDays(1),
                    Description = eventEntity.Description,
                    UserID = eventEntity.UserID,
                    SpaceID = eventEntity.SpaceID,
                    ImageUrl = eventEntity.ImageUrl,
                    CreatedDate = DateTime.Now,
                };

                _context.Events.Add(eventModel);
                await _context.SaveChangesAsync();

                // Añadimos también la reserva
                var reserveModel = new Reserve
                {
                    SpaceId = eventEntity.SpaceID,
                    UserId = eventEntity.UserID,
                    EventId = eventModel.Id,
                    CreatedDate = DateTime.Now,
                };

                _context.Reserves.Add(reserveModel);
                await _context.SaveChangesAsync();

                // Commit 
                await transaction.CommitAsync();

                return CreatedAtAction("GetEvent", new { id = eventModel.Id }, eventEntity);
            }
            catch (Exception)
            {
                // Rollback 
                await transaction.RollbackAsync();
                return StatusCode(500, "Internal server error");
            }
        }

        // DELETE: api/Events/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEvent(int id)
        {
            using var transaction = await _context.Database.BeginTransactionAsync();
            try
            {
                var eventModel = await _context.Events.FindAsync(id);
                if (eventModel == null)
                {
                    return NotFound();
                }

                var reserveModel = await _context.Reserves
                                                 .Where(r => r.EventId == id)
                                                 .FirstOrDefaultAsync();

                // Primero elimino la reserva para que no haya problemas con la clave foránea
                if (reserveModel != null)
                {
                    _context.Reserves.Remove(reserveModel);
                }

                // Luego elimino el evento
                _context.Events.Remove(eventModel);
                await _context.SaveChangesAsync();

                // Commit 
                await transaction.CommitAsync();

                return NoContent();
            }
            catch (Exception)
            {
                // Rollback transaction if there is an error
                await transaction.RollbackAsync();
                return StatusCode(500, "Internal server error");
            }
        }

        private bool EventExists(int id)
        {
            return _context.Events.Any(e => e.Id == id);
        }
    }
}
