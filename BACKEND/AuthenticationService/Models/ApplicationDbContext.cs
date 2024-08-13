using Microsoft.EntityFrameworkCore;

namespace AuthenticationService.Models
{
public class ApplicationDbContext : DbContext
{
    public DbSet<Usuario> Usuarios { get; set; }
    public DbSet<TipoUsuario> TiposUsuarios { get; set; }

    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
        : base(options)
    {
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
         modelBuilder.Entity<Usuario>()
        .ToTable("usuario")
        .Property(u => u.tipousuarioid)
        .HasColumnName("tipousuarioid");

    modelBuilder.Entity<TipoUsuario>()
        .ToTable("tipousuario")
        .Property(t => t.tipousuarioid)
        .HasColumnName("tipousuarioid");
        base.OnModelCreating(modelBuilder);
    }
}

}
