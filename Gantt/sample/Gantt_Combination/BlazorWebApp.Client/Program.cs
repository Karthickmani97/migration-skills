using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using Syncfusion.Blazor;

var builder = WebAssemblyHostBuilder.CreateDefault(args);

// Register Syncfusion Blazor services for WebAssembly
builder.Services.AddSyncfusionBlazor();

// (Optional) Register license - replace with your Syncfusion license key
// Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY");

await builder.Build().RunAsync();
