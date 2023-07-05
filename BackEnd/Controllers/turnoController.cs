using Microsoft.AspNetCore.Mvc;
using BackEnd.Models;
using BackEnd.Utilidades;

namespace BackEnd.Controllers
{
    [ApiController]
    [Route("api/turnos")]
    public class turnoController : ControllerBase
    {
        private readonly ILogger<turnoController> logger;
        private readonly IRepositorio<turno> turnoRepositorio;
        private readonly IRepositorio<spParametros> spRepositorio;

        public turnoController(ILogger<turnoController> logger, IRepositorio<turno> turnoRepositorio, IRepositorio<spParametros> spRepositorio)
        {
            this.logger = logger;
            this.turnoRepositorio = turnoRepositorio;
            this.spRepositorio = spRepositorio;
        }

        [HttpGet("ListarTurnos/{id:int}")]
        public async Task<ActionResult<List<turno>>> ListarTurnos(int id)
        {
            List<turno> _turno = await turnoRepositorio.ListarModelosPorId(id);
            return _turno;
        }

        [HttpPost]
        public async Task<ActionResult<bool>> Post([FromBody] spParametros modelo)
        {
            bool resultado = await spRepositorio.spEjecutar(modelo);
            return resultado;
        }

    }
}
