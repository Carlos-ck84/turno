using Microsoft.AspNetCore.Mvc;
using BackEnd.Models;
using BackEnd.Utilidades;

namespace BackEnd.Controllers
{
    [ApiController]
    [Route("api/servicios")]
    public class servicioController : ControllerBase
    {
        private readonly ILogger<servicioController> logger;
        private readonly IRepositorio<servicio> servicioRepositorio;

        public servicioController(ILogger<servicioController> logger, IRepositorio<servicio> servicioRepositorio)
        {
            this.logger = logger;
            this.servicioRepositorio = servicioRepositorio;
        }

        [HttpGet("{id:int}")]
        public async Task<ActionResult<servicio>> servicio(int id)
        {
            servicio _servicio = await servicioRepositorio.bucarPorId(id);
            return _servicio;
        }

        [HttpGet("ListarServicios/{id:int}")]
        public async Task<ActionResult<List<servicio>>> ListarServicios(int id)
        {
            List<servicio> _servicio = await servicioRepositorio.ListarModelosPorId(id);
            return _servicio;
        }

        [HttpPost]
        public async Task<ActionResult<bool>> Post([FromBody] servicio modelo)
        {
            bool resultado = await servicioRepositorio.guardar(modelo);
            return resultado;
        }

        [HttpPut("{id:int}")]
        public async Task<ActionResult<bool>> Put(int Id, [FromBody] servicio modelo)
        {
            bool resultado = await servicioRepositorio.editar(Id, modelo);
            return resultado;
        }

        [HttpDelete("{id:int}")]
        public async Task<ActionResult<bool>> Delete(int Id)
        {
            bool resultado = await servicioRepositorio.eliminar(Id);
            return resultado;
        }
    }
}
