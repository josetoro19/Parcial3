using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ParcialFinal.models;

namespace ParcialFinal.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RutaController : ControllerBase
    {
        private readonly ParcialFinalContext _context;
         public RutaController(ParcialFinalContext context){
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Ruta>>> GetRutas()
        {
            return await _context.Rutas.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Ruta>> GetRutaItem(string id)
        {
            var rutaItem = await _context.Rutas.FindAsync(id);
            if (rutaItem == null)
            {
                return NotFound();
            }
            return rutaItem;
        }

        [HttpPost]
        public async Task<ActionResult<Ruta>> PostRuta(Ruta ruta){
            var rutaItem = await _context.Clientes.FindAsync(ruta.Id);
            if (rutaItem != null)
            {
                return BadRequest();
            }else
            {
                _context.Rutas.Add(ruta);
                await _context.SaveChangesAsync();
                return CreatedAtAction(nameof (GetRutaItem), new {id = ruta.Id}, ruta);
            }
        }  
    }
}