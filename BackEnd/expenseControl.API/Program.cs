using expenseControl.Exceptions.Filters;
using Scalar.AspNetCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

// configura para que as urls sejam minusculas
builder.Services.AddRouting(option => option.LowercaseUrls = true);

// Configura um filtro Geral
builder.Services.AddMvc(options => options.Filters.Add<ExceptionFilter>());

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
    app.MapScalarApiReference("/docs");
}

app.UseHttpsRedirection();
app.UseAuthorization();

app.MapControllers();

app.Run();

