using System.Transactions;

namespace ExpenseControl.Communication.Responses;

public class ResponsePersonAllTransactionsJson
{
    public Guid Id { get; set; } =  Guid.NewGuid();
    public string Name { get; set; } = string.Empty;
    public int Age { get; set; }
    public List<ResponseTransactionJson> Transactions { get; set; } = [];
}