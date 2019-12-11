namespace ParcialFinal.models
{
    public class TiqueteView
    {
        public string Id { get; set; }
        public string IdRuta { get; set; }
        public string ClienteId { get; set; }
        public int Cantidad { get; set; }
        public decimal Total { get; set; }
        public string NombreCliente { get; set; }
    }
}