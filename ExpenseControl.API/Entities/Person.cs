namespace ExpenseControl.API.Entities;

public class Person: EntityBase
{
   
    public string Name { get; set; } = string.Empty;
    public int Age { get; set; }
}