namespace ExpenseControl.Communication.Responses;

public class ResponseTotalsJson
{
    public List<ResponsePersonTotalsJson> People { get; set; } = [];
    public decimal TotalIncomeGeneral { get; set; }
    public decimal TotalExpensesGeneral { get; set; }
    public decimal BalanceGeneral { get; set; }
}