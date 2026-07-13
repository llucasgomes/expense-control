using ExpenseControl.API.Infrastructure;
using ExpenseControl.Communication.Responses;
using ExpenseControl.Exceptions;
using Microsoft.EntityFrameworkCore;

namespace ExpenseControl.API.UseCases.Person.GetById;

public class GetPersonByIdUseCase
{
    public ResponsePersonAllTransactionsJson Execute(Guid id)
    {
        var dbContext = new ExpenseControlDbContext();
        var entity = dbContext
            .People
            .Include(person => person.Transactions)
            .FirstOrDefault(person => person.Id == id);
        
        if (entity == null)
        {
            throw new NotFoundException("O Cliente não foi encontrado.");
        };

        return new ResponsePersonAllTransactionsJson
        {
            Id = entity.Id,
            Name = entity.Name,
            Age = entity.Age,
            Transactions = entity.Transactions.Select(t => new ResponseTransactionJson
                {
                    Id = t.Id,
                    Amount = t.Amount,
                    Description = t.Description,
                    Type = t.Type
                }
            ).ToList()
        };



    }
}