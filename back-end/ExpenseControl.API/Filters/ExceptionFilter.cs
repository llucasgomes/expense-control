using ExpenseControl.Exceptions.ExceptionsBase;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using ExpenseControl.Communication.Responses;

namespace ExpenseControl.API.Filters;

public class ExceptionFilter: IExceptionFilter
{
    public void OnException(ExceptionContext context)
    {
        if(context.Exception is ExpenseControlException productClientHubException)
        {
            context.HttpContext.Response.StatusCode = (int)productClientHubException.GetHttpStatusCode();

            context.Result = new ObjectResult(new ResponseErrorMessageJson(productClientHubException.GetErrors()));
        }
        else
        {
            ThrowUnknownError(context);
        }
    }

    private void ThrowUnknownError(ExceptionContext context)
    {
        context.HttpContext.Response.StatusCode = StatusCodes.Status500InternalServerError;
        context.Result = new ObjectResult(new ResponseErrorMessageJson("Unknow error"));
    }
}