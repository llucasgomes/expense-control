using ExpenseControl.API.Entities;
using Microsoft.EntityFrameworkCore;

namespace ExpenseControl.API.Infrastructure;

public class ExpenseControlDbContext:DbContext
{
    public DbSet<Person> Peoples { get; set; }
    public DbSet<Transaction> Products { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseSqlite("Data Source=C:\\Banco de Dados\\Entity Framework\\ProductClientHubEF\\ProductClientHubDB.db");
    }
}