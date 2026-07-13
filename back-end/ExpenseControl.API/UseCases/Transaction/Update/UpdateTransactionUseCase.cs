using ExpenseControl.API.Infrastructure;
using ExpenseControl.API.UseCases.Transaction.SharedValidator;
using ExpenseControl.Communication.Requests;
using ExpenseControl.Communication.Responses;
using ExpenseControl.Exceptions;
using ExpenseControl.Exceptions.ExceptionsBase;

namespace ExpenseControl.API.UseCases.Transaction.Update;

public class UpdateTransactionUseCase
{
    public ResponseTransactionJson Execute(Guid id, RequestTransactionJson request)
    {
        Validate(request);

        var dbContext = new ExpenseControlDbContext();

        var entity = dbContext.Transactions.FirstOrDefault(person => person.Id == id);
        if (entity == null)
        {
            throw new NotFoundException($"Cliente com ID {id} não encontrado.");
        }

        entity.Amount = request.Amount;
        entity.Description = request.Description;
        entity.Type = request.Type;
     

        dbContext.Transactions.Update(entity);
        dbContext.SaveChanges();

        return new ResponseTransactionJson
        {
            Id = entity.Id,
            Amount = entity.Amount,
            Description = entity.Description,
            Type = entity.Type,
            PersonId = entity.PersonId
            
        };
    }

    private void Validate(RequestTransactionJson request)
    {
        var validator = new TransactionValidator();

        var result = validator.Validate(request);

        // Verificando se a validação falhou.
        if (result.IsValid == false)
        {
            var errors = result.Errors.Select(failure => failure.ErrorMessage).ToList();

            throw new ErrorOnvValidationException(errors);
        }
    }
}