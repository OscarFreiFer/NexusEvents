using BE_NexusEvents.Context;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

//Cargar variables de entorno desde un archivo .env
DotNetEnv.Env.Load();

// Add services to the container.
// Crear variable para la cadena de conexi�n
var connectionString = builder.Configuration.GetConnectionString("Connection");

var serverName = Environment.GetEnvironmentVariable("SERVERNAME");
var user = Environment.GetEnvironmentVariable("USER");
var password = Environment.GetEnvironmentVariable("PASSWORD");
var trustedWindows = Environment.GetEnvironmentVariable("TRUSTED_WINDOWS");

if (!string.IsNullOrEmpty(serverName) && 
    !string.IsNullOrEmpty(trustedWindows))
{
    connectionString = connectionString.Replace("${SERVERNAME}", serverName)
                                       .Replace("${USER}", user)
                                       .Replace("${PASSWORD}", password)
                                       .Replace("${TRUSTED_WINDOWS}", trustedWindows);
}

//Registrar servicio para la conexi�n con inyecci�n de dependencias
builder.Services.AddDbContext<AppDbContext>(
    options => options.UseSqlServer(connectionString)
);


//Cors para correcto funcionamiento en local
builder.Services.AddCors(options => options.AddPolicy("AllowWebapp",
                                    builder => builder.AllowAnyOrigin()
                                                      .AllowAnyHeader()
                                                      .AllowAnyMethod()));

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("AllowWebapp");

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
