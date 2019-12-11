using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using ParcialFinal.models;
using ParcialFinal.ModelView;

namespace ParcialFinal.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TiqueteController : ControllerBase
    {
        private readonly ParcialFinalContext _context;

        public TiqueteController(ParcialFinalContext context){
            _context = context; 
             
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<TiqueteView>>> GetTiquetes(){
            var tiquete = await _context.Tiquetes.Include(t => t.Ruta).Include(t => t.Cliente)
                .Select(t => 
                    new TiqueteView
                    {
                        IdRuta = t.Ruta.Id,
                        ClienteId = t.Cliente.Identificacion,
                        NombreCliente = t.Cliente.Nombre,
                        Id = t.Id,
                        Cantidad = t.Cantidad,
                        Total = t.Total
                    }
                ).ToListAsync();

            if(tiquete == null){
                return NotFound();
            }

            return tiquete;
        }

        [HttpPost]
        public async Task<ActionResult<Tiquete>> PostHistoria(TiqueteRequest tiquete){
            var cliente = await _context.Clientes.FindAsync(tiquete.IdentificacionCliente);
            var ruta = await _context.Rutas.FindAsync(tiquete.RutaId);

            if(cliente == null){
                ModelState.AddModelError("Cliente", "El cliente no exite, no se encontro");
            }

            if(ruta == null){
                ModelState.AddModelError("Ruta", "La ruta no exite, no se encontro");
            }

            if(!ModelState.IsValid){
                var problemDetails = new ValidationProblemDetails(ModelState){
                    Status = StatusCodes.Status400BadRequest,
                };
                return BadRequest(problemDetails);
            }

            var nuevoTiquete = new Tiquete{
                Cliente = cliente,
                Ruta = ruta,
                Cantidad = tiquete.Cantidad
                
            };

            _context.Tiquetes.Add(nuevoTiquete);

            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetTiqueteItem), new {id = tiquete.Id}, tiquete);
        }

        [HttpGet("{id}")]
        public ActionResult<TiqueteView> GetTiqueteItem(int id)
        {
            var tiquete = new TiqueteView();

            using (var command = _context.Database.GetDbConnection().CreateCommand())
            {
                command.CommandText = @"select t.Id, t.Total, c.Identificacion,c.Nombre Cliente, r.Id Ruta from Tiquetes t
                                        INNER JOIN CLIENTES c ON t.ClienteId = c.Identificacion
                                        INNER JOIN RUTAS r ON t.RutaId = r.Id
                                        Where t.Id = @id";
                command.Parameters.Add(new SqlParameter("@id", id));
                _context.Database.OpenConnection();
                var respuesta = command.ExecuteReader();

                if (respuesta.HasRows)
                {
                    respuesta.Read();
                    tiquete.Id = respuesta[0].ToString();
                    tiquete.Cantidad = (int)respuesta[1];
                    tiquete.Total = (decimal)respuesta[2];
                    tiquete.ClienteId = respuesta[3].ToString();
                    tiquete.NombreCliente = respuesta[4].ToString();
                    tiquete.IdRuta = respuesta[5].ToString();
                }
                else
                {
                    return NotFound();
                }
            }

            return tiquete;
        }

    }
}