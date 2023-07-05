namespace BackEnd.Models
{
    public class turno
    {
        public int idTurno { get; set; }

        public int idServicio { get; set; }

        public DateTime fechaTurno { get; set; }

        public string horaInicio { get; set; }

        public string horaFin { get; set; }

        public bool estado { get; set; }
    }
}
