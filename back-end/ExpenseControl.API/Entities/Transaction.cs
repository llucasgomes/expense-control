
using ExpenseControl.Communication.Enums;

namespace ExpenseControl.API.Entities;

public class Transaction :EntityBase
{
    public string Description { get; set; } = string.Empty;

    public decimal Amount { get; set; }

    public TransactionType Type { get; set; }

    public Guid PersonId { get; set; }

    // Propriedade de navegação
    public Person Person { get; set; } = default!;
}