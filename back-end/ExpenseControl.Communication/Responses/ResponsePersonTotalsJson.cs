namespace ExpenseControl.Communication.Responses;

public class ResponsePersonTotalsJson
{
    public Guid PersonId { get; set; }
    public string PersonName { get; set; } = string.Empty;
    public decimal TotalIncome { get; set; }
    public decimal TotalExpenses { get; set; }
    public decimal Balance { get; set; }
}