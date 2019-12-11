using Microsoft.EntityFrameworkCore;

namespace ParcialFinal.models
{
    public class ParcialFinalContext : DbContext
    {
        public ParcialFinalContext(DbContextOptions<ParcialFinalContext> options):
        base(options)
        {
            
        }
        public DbSet<Cliente> Clientes { get; set; }
        public DbSet<Ruta> Rutas { get; set; }
        public DbSet<Tiquete> Tiquetes {get; set; }
    }
}