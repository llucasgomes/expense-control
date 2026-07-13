using ExpenseControl.API.Infrastructure;
using ExpenseControl.API.UseCases.Person.SharedValidator;
using ExpenseControl.Communication.Requests;
using ExpenseControl.Communication.Responses;
using ExpenseControl.Exceptions;
using ExpenseControl.Exceptions.ExceptionsBase;

namespace ExpenseControl.API.UseCases.Person.Update;

public class UpdatePersonUseCase
{
    public ResponsePersonJson Execute(Guid PersonId, RequestRegisterPersonJson request)
    {
        Validate(request);
        // Criando uma instância da classe Validadora.

        var dbContext = new ExpenseControlDbContext();

        var entity = dbContext.People.FirstOrDefault(person => person.Id == PersonId);
        if (entity == null)
        {
            throw new NotFoundException($"Cliente com ID {PersonId} não encontrado.");
        }

        entity.Name = request.Name;
        entity.Age = request.Age;

        dbContext.People.Update(entity);
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