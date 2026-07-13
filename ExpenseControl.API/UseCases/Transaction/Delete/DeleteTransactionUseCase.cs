using ExpenseControl.API.Infrastructure;
using ExpenseControl.Exceptions;

namespace ExpenseControl.API.UseCases.Transaction.Delete;

public class DeleteTransactionUseCase
{
    public void Execute(Guid transactionId)
    {
        var dbContext = new ExpenseControlDbContext();

        var entity = dbContext.Transactions.FirstOrDefault(t   => t.Id == transactionId);
        if (entity == null)
        {
            throw new NotFoundException("A Transação não foi encontrado.");

        }

        dbContext.Transactions.Remove(entity);

        dbContext.SaveChanges();
    }
}