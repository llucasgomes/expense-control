using System.Net;
using ExpenseControl.Exceptions.ExceptionsBase;

namespace ExpenseControl.Exceptions;

public class NotFoundException: ExpenseControlException
{
    public NotFoundException(string errorMessage) : base(errorMessage)
    {

    }

    public override List<string> GetErrors() => [Message];
        

    public override HttpStatusCode GetHttpStatusCode() => HttpStatusCode.NotFound;
}