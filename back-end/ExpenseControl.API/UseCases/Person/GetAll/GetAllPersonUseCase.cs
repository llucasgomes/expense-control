using ExpenseControl.API.Infrastructure;
using ExpenseControl.Communication.Responses;

namespace ExpenseControl.API.UseCases.Person.GetAll;

public class GetAllPersonUseCase
{
    public ResponseAllPersonJson Execute()
    {
        var dbcontext = new ExpenseControlDbContext();
        var people = dbcontext.People.ToList();

        return new ResponseAllPersonJson
        {
            People = people.Select(person => new ResponsePersonJson
            {
                Id = person.Id,
                Name = person.Name,
                Age = person.Age,

            }).ToList()
        };
    }
}