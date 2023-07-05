namespace BackEnd.Models
{
    public class servicio
    {
        public int idServicio { get; set; }
        public int idComercio { get; set; }

        public string nomServicio { get; set; }

        public string horaApertura { get; set; }

        public string horaCierre { get; set; }

        public int duracion { get; set; }

    }
}
