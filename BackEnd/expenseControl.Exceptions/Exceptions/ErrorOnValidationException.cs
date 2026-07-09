using System.Net;

namespace expenseControl.Exceptions.Exceptions;

public class ErrorOnValidationException : ExceptionBase
{
    private readonly List<string> _errosMessage;

    public ErrorOnValidationException(List<string> errorsMessages) :base(String.Empty)
    {
        _errosMessage = errorsMessages;
    }

    public override List<string> GetErros() => _errosMessage;

    public override HttpStatusCode GetStatusCode() => HttpStatusCode.BadRequest; //400
}