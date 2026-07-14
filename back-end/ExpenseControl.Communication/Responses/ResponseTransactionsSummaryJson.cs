namespace ExpenseControl.Communication.Responses;

public class ResponseTransactionsSummaryJson
{
    public Guid PersonId { get; set; }
    public string PersonName { get; set; } = string.Empty;
    public int PersonAge { get; set; }
    public decimal TotalExpenses { get; set; }
    public decimal TotalIncome { get; set; }
    public decimal Balance { get; set; }
    public List<ResponseTransactionJson> Transactions { get; set; } = [];
}