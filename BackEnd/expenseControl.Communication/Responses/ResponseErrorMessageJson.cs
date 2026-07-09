namespace expenseControl.Communication.Responses;

public class ResponseErrorMessageJson
{
    public List<string> Errors { get; set; }

    //pra quando vir uma mensagem
    public ResponseErrorMessageJson(string message) 
    {
        Errors = [message];
    }

    //pra quando vir uma lista de mensagens
    public ResponseErrorMessageJson(List<string> errors) 
    {
        Errors = errors;
    }
}