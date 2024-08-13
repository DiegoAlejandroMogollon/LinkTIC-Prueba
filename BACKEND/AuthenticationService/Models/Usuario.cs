using System;
using System.ComponentModel.DataAnnotations;

namespace AuthenticationService.Models
{
    public class Usuario
    {
        [Key]
        public int usuarioid { get; set; }

        [Required]
        public string nombre { get; set; } = string.Empty;

        [Required]
        public string email { get; set; } = string.Empty;


        [Required]
        public string contraseña { get; set; } = string.Empty;


        [Required]
        public int tipousuarioid { get; set; }

        public DateTime fecharegistro { get; set; } = DateTime.Now;

        public TipoUsuario TipoUsuario { get; set; } = new TipoUsuario(); 

    }
}
