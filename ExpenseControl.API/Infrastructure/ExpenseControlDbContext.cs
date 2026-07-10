using ExpenseControl.API.Entities;
using Microsoft.EntityFrameworkCore;


namespace ExpenseControl.API.Infrastructure;
public class ExpenseControlDbContext : DbContext
{

    public DbSet<Person> People { get; set; }
    public DbSet<Transaction> Transactions { get; set; }

    
    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        var databasePath = Path.Combine(AppContext.BaseDirectory, "expenseControlData.db");
        optionsBuilder.UseSqlite($"Data Source={databasePath}");
    }
}