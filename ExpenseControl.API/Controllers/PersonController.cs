using Microsoft.AspNetCore.Mvc;

namespace ExpenseControl.API.Controllers;

public class PersonController :  ControllerBase
{
    [HttpPost]
    public IActionResult CreatePerson()
    {
        return Created(string.Empty, new { Message = "Usuario registrado com sucesso" });
    }
}