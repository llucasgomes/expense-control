using System.Net;

namespace ExpenseControl.Exceptions.ExceptionsBase;

public class ErrorOnvValidationException:ExpenseControlException
{
    private readonly List<string> _errors;
    public ErrorOnvValidationException(List<string> errorMessages) : base(string.Empty)
    {
        _errors = errorMessages;
    }

    public override List<string> GetErrors() => _errors;

    public override HttpStatusCode GetHttpStatusCode() => HttpStatusCode.BadRequest;
}