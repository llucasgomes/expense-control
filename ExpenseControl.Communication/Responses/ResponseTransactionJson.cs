

using ExpenseControl.Communication.Enums;

namespace ExpenseControl.Communication.Responses;

public class ResponseTransactionJson
{
    public Guid Id { get; set; }
    public string Description { get; set; } = string.Empty;
    public decimal Amount { get; set; }
    public TransactionType Type { get; set; }
    public Guid PersonId { get; set; }
    

}