using Microsoft.AspNetCore.Mvc;
using AuthenticationService.Models;
using Microsoft.EntityFrameworkCore;

namespace AuthenticationService.Controllers
{
    [Route("api/autenticacion/[controller]")]
    [ApiController]
    public class UsuariosController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public UsuariosController(ApplicationDbContext context)
        {
            _context = context;
        }
        
        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginRequest loginRequest)
        {
            var usuario = await _context.Usuarios
                .Include(u => u.TipoUsuario)
                .FirstOrDefaultAsync(u => u.email == loginRequest.Email);

            if (usuario == null || usuario.contraseña != loginRequest.Contraseña)
            {
                return Unauthorized("Credenciales inválidas");
            }

            return Ok(new { mensaje = "Login exitoso", usuario = usuario.nombre, tipoUsuario = usuario.TipoUsuario.nombre });
        }

    }

    public class LoginRequest
    {
        public string Email { get; set; } = string.Empty;
        public string Contraseña { get; set; } = string.Empty; 
    }
}
