using ExpenseControl.API.Infrastructure;
using ExpenseControl.Communication.Responses;
using ExpenseControl.Exceptions;

namespace ExpenseControl.API.UseCases.Transaction.GetById;

public class GetTransactionByIdUseCase
{
    public ResponseTransactionJson Execute(Guid id)
    {
        var dbContext = new ExpenseControlDbContext();
        var entity = dbContext
            .Transactions
            .FirstOrDefault(person => person.Id == id);
        
        if (entity == null)
        {
            throw new NotFoundException("A Transação não foi encontrado.");
        };

        return new ResponseTransactionJson
        {
            Id = entity.Id,
            Amount = entity.Amount,
            Description = entity.Description,
            PersonId =  entity.PersonId
               
        };
    }
}