namespace ExpenseControl.Communication.Responses;

public class ResponsePersonJson
{
    public Guid Id { get; set; } =  Guid.NewGuid();
    public string Name { get; set; } = string.Empty;
    public int Age { get; set; } 
}