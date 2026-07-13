using ExpenseControl.API.Infrastructure;
using ExpenseControl.API.UseCases.Transaction.SharedValidator;
using ExpenseControl.Communication.Enums;
using ExpenseControl.Communication.Requests;
using ExpenseControl.Communication.Responses;
using ExpenseControl.Exceptions;
using ExpenseControl.Exceptions.ExceptionsBase;
using ExpenseControl.API.Entities;


namespace ExpenseControl.API.UseCases.Transaction.Register;

public class RegisterTransactionUseCase
{
    public ResponseTransactionJson Execute(RequestTransactionJson request)
    {
        Validate(request);
        
        var dbContext = new ExpenseControlDbContext();
        
        var person = dbContext.People.FirstOrDefault(p => p.Id == request.PersonId)
                     ?? throw new NotFoundException("Pessoa não encontrada.");
        
        if (person.Age < 18 && request.Type == TransactionType.Expense)
            throw new ErrorOnvValidationException(new List<string>
            {
                "Pessoas menores de 18 anos não podem ter transações do tipo Receita."
            });


        var entity = new Entities.Transaction()
        {
            Description = request.Description,
            Amount = request.Amount,
            Type = request.Type,
            PersonId = person.Id
        };
        
        dbContext.Transactions.Add(entity);
        dbContext.SaveChanges();
        
        return new ResponseTransactionJson 
        {
            Id = entity.Id,
            Description = entity.Description,
            Amount = entity.Amount,
            Type = entity.Type
        };;
    }
    
    private void Validate(RequestTransactionJson request)
    {
        var validator = new TransactionValidator();
        var result = validator.Validate(request);

        if (!result.IsValid)
        {
            var errors = result.Errors.Select(e => e.ErrorMessage).ToList();
            throw new ErrorOnvValidationException(errors);
        }
    }
}