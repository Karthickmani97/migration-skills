using SyncfusionBlazorApp.Components;
using Syncfusion.Blazor;

var builder = WebApplication.CreateBuilder(args);

// ✅ Use ONLY Razor Components model
builder.Services.AddRazorComponents()
    .AddInteractiveServerComponents();

// Syncfusion
builder.Services.AddSyncfusionBlazor();

builder.Services.AddControllers();

var app = builder.Build();

// Pipeline
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error", createScopeForErrors: true);
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseAntiforgery();

app.MapControllers();

// ✅ ONLY ONE endpoint system
app.MapRazorComponents<App>()
    .AddInteractiveServerRenderMode();

app.Run();
