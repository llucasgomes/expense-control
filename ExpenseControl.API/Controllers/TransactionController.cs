using ExpenseControl.API.UseCases.Transaction.Delete;
using ExpenseControl.API.UseCases.Transaction.GetAll;
using ExpenseControl.API.UseCases.Transaction.GetById;
using ExpenseControl.API.UseCases.Transaction.Register;
using ExpenseControl.API.UseCases.Transaction.Update;
using ExpenseControl.Communication.Requests;
using ExpenseControl.Communication.Responses;
using Microsoft.AspNetCore.Mvc;

namespace ExpenseControl.API.Controllers;

[Route("api/[controller]")]
[ApiController]
public class TransactionController : ControllerBase
{
   
    [HttpPost]
    [Route("register")]
    // Retorna o status code 201 (Created) quando a criação for bem sucedida
    [ProducesResponseType(typeof(ResponseTransactionJson),StatusCodes.Status201Created)]
    // Retorna o status code 400 (Bad Request) quando houver erro na requisição
    [ProducesResponseType(typeof(ResponseErrorMessageJson), StatusCodes.Status400BadRequest)]
    // Retorna o status code 500 (Server Error) quando houver erro no servidor
    [ProducesResponseType(StatusCodes.Status500InternalServerError)]
    public IActionResult Register([FromBody] RequestTransactionJson transaction)
    {
        var useCase = new RegisterTransactionUseCase();
        var response = useCase.Execute(transaction);

        //var newUser = useCase.Execute(user); 
        return Created(string.Empty, new { Message = "Transação registrada com sucesso",Transaction=transaction });
    }
    
    [HttpGet]
    [Route("get-all")]
    [ProducesResponseType<ResponseAllTransactionsJson>(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status204NoContent)]
    [ProducesResponseType(StatusCodes.Status500InternalServerError)]
    public IActionResult GetAll()
    {
        var useCase = new GetAllTransactionsUseCase();

        var response = useCase.Execute(); 

        if (response.Transactions.Count == 0)
        {
            return NoContent();
        }
            
        return Ok(response);
    }
    
    [HttpGet]
    // informa que o parâmetro da rota é "id"
    // Responsável por diferenciar os métodos GET
    [Route("find/{id:guid}")]
    [ProducesResponseType(typeof(ResponseTransactionJson), StatusCodes.Status200OK)]
    [ProducesResponseType(typeof(ResponseErrorMessageJson), StatusCodes.Status404NotFound)]
    [ProducesResponseType(StatusCodes.Status500InternalServerError)]
    public IActionResult GetById([FromRoute]Guid id)
    {
        var useCase = new GetTransactionByIdUseCase();

        var response = useCase.Execute(id);

        return Ok(response); 
    }
    
    [HttpPut]
    [Route("update/{id:guid}")]
    [ProducesResponseType(StatusCodes.Status204NoContent)]
    [ProducesResponseType(typeof(ResponseErrorMessageJson), StatusCodes.Status400BadRequest)]
    [ProducesResponseType(typeof(ResponseErrorMessageJson), StatusCodes.Status404NotFound)]
    public IActionResult Update([FromRoute] Guid id, [FromBody] RequestTransactionJson request)
    {
        var useCase = new UpdateTransactionUseCase();

        useCase.Execute(id, request);

        return NoContent();
    }
    
    //  Definindo que o método responde a requisições DELETE (DELETE)
    [HttpDelete]
    [Route("delete/{id:guid}")]
    [ProducesResponseType(StatusCodes.Status204NoContent)]
    [ProducesResponseType(typeof(ResponseErrorMessageJson), StatusCodes.Status404NotFound)]

    public IActionResult Delete([FromRoute] Guid id)
    {
        var useCase = new DeleteTransactionUseCase();
        useCase.Execute(id);
        
        return NoContent();
        
    }
}