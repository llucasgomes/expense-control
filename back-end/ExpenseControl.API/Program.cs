using ExpenseControl.API.Filters;
using Scalar.AspNetCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddControllers(); 
builder.Services.AddOpenApi();

// configura para que as urls sejam minusculas
builder.Services.AddRouting(option => option.LowercaseUrls = true);

// Configura um filtro Geral
builder.Services.AddMvc(options => options.Filters.Add<ExceptionFilter>());

// Política de CORS para aceitar requisições do front end
builder.Services.AddCors(options =>
{
    options.AddPolicy("FrontendPolicy", policy =>
    {
        policy
            .WithOrigins("http://localhost:3001", "https://localhost:3000","http://localhost:3000", "https://localhost:3001")
            .AllowAnyHeader()
            .AllowAnyMethod();
    });
});



var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
    app.MapScalarApiReference("/docs");
}

//Console.WriteLine(Directory.GetCurrentDirectory());

app.UseHttpsRedirection();
app.UseCors("FrontendPolicy"); //CORS
app.MapControllers();
app.Run();


