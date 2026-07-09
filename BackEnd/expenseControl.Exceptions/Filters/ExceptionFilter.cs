using expenseControl.Communication.Responses;
using expenseControl.Exceptions.Exceptions;

using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;

namespace expenseControl.Exceptions.Filters;

public class ExceptionFilter : IExceptionFilter
{
    public void OnException(ExceptionContext context)
    {
        if (context.Exception is ExceptionBase customException)
        {
            // Exceções customizadas (confiáveis)
            HandleCustomException(context, customException);

        }
        else
        {
            ThrowUnknownError(context);
        }
    }
    
    private static void HandleCustomException(ExceptionContext context, ExceptionBase customException)
    {
        context.HttpContext.Response.StatusCode = (int)customException.GetStatusCode();
        context.Result = new ObjectResult(new ResponseErrorMessageJson(customException.GetErros()));
    }

    private static void ThrowUnknownError(ExceptionContext context)
    {
        context.HttpContext.Response.StatusCode = 500;
        context.Result = new ObjectResult(new ResponseErrorMessageJson("ERRO DESCONHECIDO"));
    }
}