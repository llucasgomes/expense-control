using ExpenseControl.Communication.Responses;
using Microsoft.AspNetCore.Mvc;

namespace ExpenseControl.API.Controllers;

[Route("api/[controller]")]
[ApiController]
public class PersonController :  ControllerBase
{
    [HttpPost]
    [ProducesResponseType(typeof(ResponseErrorMessageJson), StatusCodes.Status400BadRequest)]
    [ProducesResponseType(StatusCodes.Status500InternalServerError)]
    public IActionResult CreatePerson()
    {
        return Created(string.Empty, new { Message = "Usuario registrado com sucesso" });
    }
}