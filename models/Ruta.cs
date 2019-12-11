using Newtonsoft.Json;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
namespace ParcialFinal.models
{
    public class Ruta
    {
        [Key] 
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public string Id { get; set; }
        [Required]
        public string Origen { get; set; }
        [Required]
        public string Destino { get; set; }
        [Required]
        public decimal Valor { get; set; }
        public virtual Tiquete Tiquete { get; set; }
    }
}