using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BE_NexusEvents.Context;
using BE_NexusEvents.Models;
using BCrypt.Net;
using BE_NexusEvents.Models.DTO;
using Microsoft.VisualStudio.Web.CodeGenerators.Mvc.Templates.BlazorIdentity.Pages.Manage;

namespace BE_NexusEvents.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly AppDbContext _context;

        public UsersController(AppDbContext context)
        {
            _context = context;
        }

        // POST: api/Users/login
        [HttpPost("login")]
        public async Task<ActionResult<LoginRegisterResponse>> Login(LoginDTO user)
        {
            var userInDb = await _context.Users.FirstOrDefaultAsync(u => u.Email == user.Email);

            if (userInDb == null || !BCrypt.Net.BCrypt.Verify(user.Password, userInDb.Password))
            {
                return Unauthorized();
            }

            string uniqueKey = $"{user.Email}_{DateTime.UtcNow.ToString("dd.MM.yyyy HH.mm.ss")}";
            string token = BCrypt.Net.BCrypt.HashPassword(uniqueKey);


            return Ok(new { Token = token, Id = userInDb.Id});
        }

        // GET: api/Users
        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> GetUsers()
        {
            return await _context.Users.ToListAsync();
        }

        // GET: api/Users/5
        [HttpGet("{id}")]
        public async Task<ActionResult<User>> GetUser(int id)
        {
            var user = await _context.Users.FindAsync(id);

            if (user == null)
            {
                return NotFound();
            }

            return user;
        }

        // POST: api/Users
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost("register")]
        public async Task<ActionResult<LoginRegisterResponse>> PostUser(UserEntity userEntity)
        {
            // Encrypt password
            userEntity.Password = BCrypt.Net.BCrypt.HashPassword(userEntity.Password);

            var user = new User
            {
                Name = userEntity.Name,
                Email = userEntity.Email,
                Password = userEntity.Password,
                CreatedDate = DateTime.UtcNow
            };

            string uniqueKey = $"{user.Email}_{DateTime.UtcNow.ToString("dd.MM.yyyy HH.mm.ss")}";
            string token = BCrypt.Net.BCrypt.HashPassword(uniqueKey);

            _context.Users.Add(user);
            await _context.SaveChangesAsync();
            
            return CreatedAtAction("GetUser", new { Token = token, id = user.Id}, new { Token = token, id = user.Id });
        }

        // PUT: api/Users/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUser(int id, User user)
        {
            if (id != user.Id)
            {
                return BadRequest();
            }

            _context.Entry(user).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserExists(id))
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

        // DELETE: api/Users/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUser(int id)
        {
            var user = await _context.Users.FindAsync(id);
            if (user == null)
            {
                return NotFound();
            }

            _context.Users.Remove(user);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool UserExists(int id)
        {
            return _context.Users.Any(e => e.Id == id);
        }
    }
}
