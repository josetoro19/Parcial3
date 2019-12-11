using ParcialFinal.models;
using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;
namespace ParcialFinal.ModelView
{
    public class TiqueteRequest
    {
        public string Id { get; set; }
        [Required]
        public string IdentificacionCliente { get; set; }
        [Required]
        public string RutaId { get; set; }
        [Required]
        public int Cantidad { get; set; }
         [Required]
        public decimal Total { get; set; }

        public class ConsultarTiqueteResponse{
            public ConsultarTiqueteResponse(TiqueteView tiquete){
                Tiquete = tiquete;
            }
            public TiqueteView Tiquete { get; set; }
        }
    }
}