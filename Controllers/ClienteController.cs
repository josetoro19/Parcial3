using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ParcialFinal.models;

namespace ParcialFinal.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClienteController : ControllerBase
    {
        private readonly ParcialFinalContext _context;
        public ClienteController(ParcialFinalContext context){
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Cliente>>> GetClientes()
        {
            return await _context.Clientes.ToListAsync();
        }

        [HttpPost]
        public async Task<ActionResult<Cliente>> PostCliente(Cliente cliente){
            var clienteItem = await _context.Clientes.FindAsync(cliente.Identificacion);
            if (clienteItem != null)
            {
                return BadRequest();
            }else
            {
                _context.Clientes.Add(cliente);
                await _context.SaveChangesAsync();
                return CreatedAtAction(nameof (GetClienteItem), new {id = cliente.Identificacion}, cliente);
            }
        }

        [HttpGet("{identificacion}")]
        public async Task<ActionResult<Cliente>> GetClienteItem(string identificacion)
        {
            var clienteItem = await _context.Clientes.FindAsync(identificacion);
            if (clienteItem == null)
            {
                return NotFound();
            }
            return clienteItem;
        }   
    }
}