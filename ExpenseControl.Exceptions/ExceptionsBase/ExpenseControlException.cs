using System.Net;

namespace ExpenseControl.Exceptions.ExceptionsBase;

public abstract class ExpenseControlException:SystemException
{
    public ExpenseControlException(string errorMessage):base(errorMessage)
    {
        
    }
    public abstract List<string> GetErrors();
    public abstract HttpStatusCode GetHttpStatusCode();
}