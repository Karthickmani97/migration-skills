var playwrightTests = require('@syncfusion/ej2-staging/src/blazor-playwright');
const config = require(__dirname + '/config.json');
const repo = require(__dirname + '/package.json');
var gulp = require("gulp");
var fs = require('fs');
var read = require("fs-readdir-recursive");

gulp.task('playwright-mail-report', function (done) {
    var ciArgs = process.argv[4];
    playwrightTests.generateReport(ciArgs, config);
    done();
});

gulp.task('CheckoutSamples', async function(done){
    var branchName = process.argv[4];
    playwrightTests.CheckoutSamples("ej2-blazor-samples",branchName);
    done();
});

gulp.task('Update-Local-Report', async function(done) {
    var folderName = process.argv[4];
    playwrightTests.updateLocalReport(config.Mail,folderName,repo.name);
    done();
});

gulp.task('switch-branch', async function (done) {
    var branchName = process.argv[4];
    branchName = branchName.split('/').length > 1 ? branchName.split('/')[0] : 'development';
    var nexusServer = (branchName === 'hotfix') ? 'servicepack' : 'hosted';
    var npmrcBranchName = (branchName === 'hotfix') ? 'hotfix-new' : branchName;
    await branchSwitch(branchName, nexusServer, npmrcBranchName);
    done();
});
async function branchSwitch(branchName, nexusServer, npmrcBranchName) {
    var nugetFiles = await read("./").filter(item => item.endsWith(".config"));
    if (nugetFiles.length > 0) {
        for (var j = 0; j < nugetFiles.length; j++) {
            if (nugetFiles[j].indexOf('NuGet') > 0) {
                var fileContent = await fs.readFileSync(nugetFiles[j], 'utf8');
                var blazorNuget = 'https://nexus.syncfusioninternal.com/repository/blazor-' + branchName + '/';
                var nexusServerValue = 'https://nexus.syncfusioninternal.com/repository/nuget-' + nexusServer + '/';
                fileContent = await fileContent.replace(/https:\/\/[a-z0-9\-.\/]+/g, (match) => {
                    if (match.includes('repository/nuget')) {
                        return nexusServerValue; // Replace with nexusServerValue if 'repository/nuget' is found
                    } else if (match.includes('index.json')) {
                        return match; // Keep the original match if 'index.json' is present
                    } else {
                        return blazorNuget; // Replace with blazorNuget for all other matches
                    }
                });
                await fs.writeFileSync(nugetFiles[j], fileContent);
            }
        }
    }
    if (fs.existsSync('./.npmrc')) {
        var npmrcContent = ' registry=https://registry.npmjs.org/ \n @syncfusion:registry=https://nexus.syncfusioninternal.com/repository/ej2-' + npmrcBranchName + '/'
        await fs.writeFileSync('./.npmrc', npmrcContent);
    }
}