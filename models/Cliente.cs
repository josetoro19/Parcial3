using Newtonsoft.Json;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
namespace ParcialFinal.models
{
    public class Cliente
    {
        [Key] 
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public string Identificacion { get; set; }
        [Required]
        public string Nombre { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]
        public string Telefono { get; set; }
        public virtual Tiquete Tiquete { get; set; }
    }
}