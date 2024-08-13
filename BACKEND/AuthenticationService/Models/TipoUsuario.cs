using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace AuthenticationService.Models
{
    public class TipoUsuario
    {
        [Key]
        public int tipousuarioid { get; set; }

        [Required]
        public string nombre { get; set; } = string.Empty;

        public ICollection<Usuario> Usuarios { get; set; }  = new List<Usuario>();
    }
}
