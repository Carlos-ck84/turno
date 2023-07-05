using Microsoft.AspNetCore.Mvc;
using BackEnd.Models;
using BackEnd.Utilidades;

namespace BackEnd.Controllers
{
    [ApiController]
    [Route("api/comercios")]
    public class comercioController : ControllerBase
    {
        private readonly ILogger<comercioController> logger;
        private readonly IRepositorio<comercio> comercioRepositorio;

        public comercioController(ILogger<comercioController> logger, IRepositorio<comercio> comercioRepositorio)
        {
            this.logger = logger;
            this.comercioRepositorio = comercioRepositorio;
        }

        [HttpGet]
        public async Task<ActionResult<List<comercio>>> comercios()
        {
            List<comercio> lcomercios = await comercioRepositorio.lista();
            return lcomercios;
        }

        [HttpGet("{id:int}")]
        public async Task<ActionResult<comercio>> comercios(int id)
        {
            comercio _comercio = await comercioRepositorio.bucarPorId(id);
            return _comercio;
        }

        [HttpPost]
        public async Task<ActionResult<bool>> Post([FromBody] comercio modelo)
        {
            bool resultado = await comercioRepositorio.guardar(modelo);
            return resultado;
        }

        [HttpPut("{id:int}")]
        public async Task<ActionResult<bool>> Put(int id, [FromBody] comercio modelo)
        {
            bool resultado = await comercioRepositorio.editar(id, modelo);
            return resultado;
        }

        [HttpDelete("{id:int}")]
        public async Task<ActionResult<bool>> Delete(int id)
        {
            bool resultado = await comercioRepositorio.eliminar(id);
            return resultado;
        }
    }
}
