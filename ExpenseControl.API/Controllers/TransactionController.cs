using ExpenseControl.API.UseCases.Transaction.Register;
using ExpenseControl.Communication.Requests;
using ExpenseControl.Communication.Responses;
using Microsoft.AspNetCore.Mvc;

namespace ExpenseControl.API.Controllers;

[Route("api/[controller]")]
[ApiController]
public class TransactionController : ControllerBase
{
   
    [HttpPost]
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
}