using ExpenseControl.API.Infrastructure;
using ExpenseControl.Exceptions;

namespace ExpenseControl.API.UseCases.Person.Delete;

public class DeletePersonUseCase
{
    public void Execute(Guid personId)
    {
        var dbContext = new ExpenseControlDbContext();

        var entity = dbContext.People.FirstOrDefault(person   => person.Id == personId);
        if (entity == null)
        {
            throw new NotFoundException("O Cliente não foi encontrado.");

        }

        dbContext.People.Remove(entity);

        dbContext.SaveChanges();
    }
}