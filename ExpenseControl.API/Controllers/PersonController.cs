using ExpenseControl.API.UseCases.Person.Delete;
using ExpenseControl.API.UseCases.Person.GetAll;
using ExpenseControl.API.UseCases.Person.GetById;
using ExpenseControl.API.UseCases.Person.Update;
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
    [Route("register")]
    // Retorna o status code 201 (Created) quando a criação for bem sucedida
    [ProducesResponseType(typeof(ResponsePersonJson),StatusCodes.Status201Created)]
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
    [Route("get-all")]
    [ProducesResponseType<ResponseAllPersonJson>(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status204NoContent)]
    [ProducesResponseType(StatusCodes.Status500InternalServerError)]
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
    
    [HttpGet]
    // informa que o parâmetro da rota é "id"
    // Responsável por diferenciar os métodos GET
    [Route("find/{id:guid}")]
    [ProducesResponseType(typeof(ResponsePersonAllTransactionsJson), StatusCodes.Status200OK)]
    [ProducesResponseType(typeof(ResponseErrorMessageJson), StatusCodes.Status404NotFound)]
    [ProducesResponseType(StatusCodes.Status500InternalServerError)]
    public IActionResult GetById([FromRoute]Guid id)
    {
        var useCase = new GetPersonByIdUseCase();

        var response = useCase.Execute(id);

        return Ok(response); 
    }
    
    [HttpPut]
    [Route("update/{id:guid}")]
    [ProducesResponseType(StatusCodes.Status204NoContent)]
    [ProducesResponseType(typeof(ResponseErrorMessageJson), StatusCodes.Status400BadRequest)]
    [ProducesResponseType(typeof(ResponsePersonJson), StatusCodes.Status404NotFound)]
    public IActionResult Update([FromRoute] Guid id, [FromBody] RequestRegisterPersonJson request)
    {
        var useCase = new UpdatePersonUseCase();

        var response = useCase.Execute(id, request);

        return NoContent();
    }
    
    
    //  Definindo que o método responde a requisições DELETE (DELETE)
    [HttpDelete]
    [Route("delete/{id:guid}")]
    [ProducesResponseType(StatusCodes.Status204NoContent)]
    [ProducesResponseType(typeof(ResponseErrorMessageJson), StatusCodes.Status404NotFound)]

    public IActionResult Delete([FromRoute] Guid id)
    {
        var useCase = new DeletePersonUseCase();
        useCase.Execute(id);
        
        return NoContent();
        
    }
}