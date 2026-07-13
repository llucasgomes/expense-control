using ExpenseControl.API.Infrastructure;
using ExpenseControl.Communication.Responses;

namespace ExpenseControl.API.UseCases.Transaction.GetAll;

public class GetAllTransactionsUseCase
{
    public ResponseAllTransactionsJson Execute()
    {
        var dbcontext = new ExpenseControlDbContext();
        var transactions = dbcontext.Transactions.ToList();

        return new ResponseAllTransactionsJson
        {
            Transactions = transactions.Select(t => new ResponseTransactionJson
            {
                Id = t.Id,
                Amount = t.Amount,
                Description = t.Description,
                PersonId = t.PersonId,
                Type = t.Type,
            }).ToList()
        };
    }
}