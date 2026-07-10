using ExpenseControl.API.UseCases.Person.GetAll;
using ExpenseControl.Communication.Requests;
using ExpenseControl.Communication.Responses;
using Microsoft.AspNetCore.Mvc;

namespace ExpenseControl.API.Controllers;

[Route("api/[controller]")]
[ApiController]
public class PersonController :  ControllerBase
{
    // Informando que é um controller de API
    // Definindo como a url deve ser construída
    [HttpPost]
    // Retorna o status code 201 (Created) quando a criação for bem sucedida
    //[ProducesResponseType(typeof(ResponsePersonJson),StatusCodes.Status201Created)]
    // Retorna o status code 400 (Bad Request) quando houver erro na requisição
    [ProducesResponseType(typeof(ResponseErrorMessageJson), StatusCodes.Status400BadRequest)]
    // Retorna o status code 500 (Server Error) quando houver erro no servidor
    [ProducesResponseType(StatusCodes.Status500InternalServerError)]
    public IActionResult Register([FromBody] RequestRegisterPersonJson user)
    {
        var useCase = new RegisterPersonUseCase();

        var newUser = useCase.Execute(user); 
        return Created(string.Empty, new { Message = "Usuario registrado com sucesso",User=newUser });
    }
    
    
    
    [HttpGet]
    [ProducesResponseType<ResponseAllPersonJson>(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status204NoContent)]
    public IActionResult GetAll()
    {
        var useCase = new GetAllPersonUseCase();

        var response = useCase.Execute(); 

        if (response.People.Count == 0)
        {
            return NoContent();
        }
            
        return Ok(response);
    }
}