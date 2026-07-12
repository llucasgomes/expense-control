namespace ExpenseControl.Communication.Responses;

public class ResponseAllTransactionsJson
{
    public List<ResponseTransactionJson> Transactions { get; set; } = [];
}