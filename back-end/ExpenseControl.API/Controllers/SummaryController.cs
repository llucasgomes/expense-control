using ExpenseControl.API.UseCases.Summary.GetAll;
using ExpenseControl.API.UseCases.Transaction.SummaryById;
using ExpenseControl.Communication.Responses;
using Microsoft.AspNetCore.Mvc;

namespace ExpenseControl.API.Controllers;

[Route("api/[controller]")]
[ApiController]

public class SummaryController:ControllerBase
{
    [HttpGet]
    [Route("summary/{id:guid}")]
    [ProducesResponseType<ResponseTransactionsSummaryJson>(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status204NoContent)]
    [ProducesResponseType(StatusCodes.Status500InternalServerError)]
    public IActionResult GetTransactionsSummary(Guid id)
    {
        var useCase = new GetTransactionsSummaryByPersonUseCase();

        var response = useCase.Execute(id); 

        if (response.Transactions.Count == 0)
        {
            return NoContent();
        }
            
        return Ok(response);
    }
    
    [HttpGet]
    [ProducesResponseType(typeof(ResponseTotalsJson), StatusCodes.Status200OK)]
    [ProducesResponseType(typeof(ResponseErrorMessageJson), StatusCodes.Status400BadRequest)]
    [ProducesResponseType(StatusCodes.Status500InternalServerError)]
    public IActionResult GetAll()
    {
        var useCase = new GetAllTotalsUseCase();
        var response = useCase.Execute();
        return Ok(response);
    }
}