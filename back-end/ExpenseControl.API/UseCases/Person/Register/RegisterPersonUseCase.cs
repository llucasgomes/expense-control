using ExpenseControl.API.Entities;
using ExpenseControl.API.Infrastructure;
using ExpenseControl.API.UseCases.Person.SharedValidator;
using ExpenseControl.Communication.Requests;
using ExpenseControl.Communication.Responses;
using ExpenseControl.Exceptions.ExceptionsBase;



public class RegisterPersonUseCase
{
    public ResponsePersonJson Execute(RequestRegisterPersonJson request)
    {
        // Criando uma instância da classe Validadora.
        Validate(request);

        var dbContext = new ExpenseControlDbContext();

        var entity = new Person()
        {
            Name = request.Name,
            Age = request.Age,
        };
        
        dbContext.People.Add(entity);
        dbContext.SaveChanges();

        return new ResponsePersonJson
        {
            Id = entity.Id,
            Name = entity.Name,
            Age = entity.Age
        };

    }
    
    private void Validate(RequestRegisterPersonJson request)
    {
        var validator = new PersonValidator();

        var result = validator.Validate(request);

        // Verificando se a validação falhou.
        if (result.IsValid == false)
        {
            var errors = result.Errors.Select(failure => failure.ErrorMessage).ToList();

            throw new ErrorOnvValidationException(errors);
        }
    }
}