using ExpenseControl.API.Infrastructure;
using ExpenseControl.Communication.Responses;
using ExpenseControl.Exceptions;
using Microsoft.EntityFrameworkCore;
using ExpenseControl.Communication.Enums;

namespace ExpenseControl.API.UseCases.Transaction.SummaryById;

public class GetTransactionsSummaryByPersonUseCase
{
    public ResponseTransactionsSummaryJson Execute(Guid personId)
    {
        var dbcontext = new ExpenseControlDbContext();

        var person = dbcontext.People.AsNoTracking().FirstOrDefault(p => p.Id == personId);
        
        if (person is null)
            throw new NotFoundException("Pessoa não encontrada.");
        
        var transactions = dbcontext.Transactions
            .AsNoTracking()
            .Where(t => t.PersonId == personId)
            .ToList();
        
        var totalExpenses = transactions
            .Where(t => t.Type == TransactionType.Expense)
            .Sum(t => t.Amount);

        var totalIncome = transactions
            .Where(t => t.Type == TransactionType.Income)
            .Sum(t => t.Amount);
        
        return new ResponseTransactionsSummaryJson
        {
            PersonId = person.Id,
            PersonAge = person.Age,
            PersonName = person.Name,
            TotalExpenses = totalExpenses,
            TotalIncome = totalIncome,
            Balance = totalIncome - totalExpenses,
            Transactions = transactions.Select(t => new ResponseTransactionJson
            {
                Id = t.Id,
                Description = t.Description,
                Amount = t.Amount,
                Type = t.Type,
                PersonId = t.PersonId
            }).ToList()
        };
    }
   

}