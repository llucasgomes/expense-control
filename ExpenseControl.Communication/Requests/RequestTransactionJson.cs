using ExpenseControl.Communication.Enums;

namespace ExpenseControl.Communication.Requests;

public class RequestTransactionJson
{
    public string Description { get; set; } = string.Empty;
    public decimal Amount { get; set; }
    public TransactionType Type { get; set; }
    public Guid PersonId { get; set; }
    

}