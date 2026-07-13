using ExpenseControl.Communication.Requests;
using FluentValidation;

namespace ExpenseControl.API.UseCases.Person.SharedValidator;

public class PersonValidator  : AbstractValidator<RequestRegisterPersonJson>
{
    // Definindo as regras de validação para o RequestClientJSON 
    // Utilizando a biblioteca FluentValidation
    public PersonValidator()
    {
        RuleFor(p => p.Name)
            .NotEmpty().WithMessage("O nome é obrigatório.")
            .MinimumLength(2).WithMessage("O nome deve ter pelo menos 2 caracteres.")
            .MaximumLength(100).WithMessage("O nome não pode exceder 100 caracteres.");

        RuleFor(p => p.Age)
            .GreaterThanOrEqualTo(0)
            .WithMessage("A idade não pode ser menor que 0.");
    }
}