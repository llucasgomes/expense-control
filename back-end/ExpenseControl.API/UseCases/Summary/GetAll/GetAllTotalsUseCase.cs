using ExpenseControl.API.Infrastructure;
using ExpenseControl.Communication.Enums;
using ExpenseControl.Communication.Responses;
using Microsoft.EntityFrameworkCore;

namespace ExpenseControl.API.UseCases.Summary.GetAll;

public class GetAllTotalsUseCase
{
    public ResponseTotalsJson Execute()
    {
        var dbContext = new ExpenseControlDbContext();
        var person = dbContext
            .People
            .AsNoTracking()
            .Include(p => p.Transactions)
            .ToList();

        var peopleTotals = person.Select(p =>
        {
            var totalIncome = p.Transactions
                .Where(t => t.Type == TransactionType.Income)
                .Sum(t => t.Amount);
            
            var totalExpenses = p.Transactions
                .Where(t => t.Type == TransactionType.Expense)
                .Sum(t => t.Amount);
            
            return new ResponsePersonTotalsJson
            {
                PersonId = p.Id,
                PersonName = p.Name,
                Age = p.Age,
                TotalIncome = totalIncome,
                TotalExpenses = totalExpenses,
                Balance = totalIncome - totalExpenses
            };
        }).ToList();

        return new ResponseTotalsJson
        {
            People = peopleTotals,
            TotalIncomeGeneral = peopleTotals.Sum(p => p.TotalIncome),
            TotalExpensesGeneral = peopleTotals.Sum(p => p.TotalExpenses),
            BalanceGeneral = peopleTotals.Sum(p => p.Balance)
        };
    }
}