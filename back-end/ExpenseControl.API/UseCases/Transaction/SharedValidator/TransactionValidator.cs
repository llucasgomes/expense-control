using ExpenseControl.Communication.Requests;
using FluentValidation;

namespace ExpenseControl.API.UseCases.Transaction.SharedValidator;

public class TransactionValidator: AbstractValidator<RequestTransactionJson>
{
    // Definindo as regras de validação para o RequestClientJSON 
    // Utilizando a biblioteca FluentValidation
    public TransactionValidator()
    {
        RuleFor(t => t.Description)
            .NotEmpty().WithMessage("A descrição é obrigatória.")
            .MinimumLength(2).WithMessage("A descrição deve ter pelo menos 2 caracteres.")
            .MaximumLength(200).WithMessage("A descrição não pode exceder 200 caracteres.");

        RuleFor(t => t.Amount)
            .GreaterThan(0).WithMessage("O valor deve ser maior que zero.");

        RuleFor(t => t.Type)
            .IsInEnum().WithMessage("O tipo de transação informado é inválido.");

        RuleFor(t => t.PersonId)
            .NotEmpty().WithMessage("O identificador da pessoa é obrigatório.");
    }
}