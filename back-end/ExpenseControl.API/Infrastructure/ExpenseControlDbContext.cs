using ExpenseControl.API.Entities;
using Microsoft.EntityFrameworkCore;


namespace ExpenseControl.API.Infrastructure;
public class ExpenseControlDbContext : DbContext
{

    public DbSet<Person> People { get; set; }
    public DbSet<Transaction> Transactions { get; set; }

    
    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        var baseDirectory = AppContext.BaseDirectory; // .../ExpenseControl.API/bin/Debug/net10.0/
        var projectRoot = Path.GetFullPath(Path.Combine(baseDirectory, "..", "..", ".."));
        var databasePath = Path.Combine(projectRoot, "expenseControlData.db");
        Console.WriteLine(databasePath);
        optionsBuilder.UseSqlite($"Data Source={databasePath}");
    }
}