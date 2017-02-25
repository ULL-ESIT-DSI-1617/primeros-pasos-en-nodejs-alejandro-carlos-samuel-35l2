var fs = require('fs');
var argv = require('minimist')(process.argv.slice(2));
let version = fs.readFileSync('../VERSION','utf8');

main();

function main ()
{
  if(fs.existsSync('../VERSION'))
  {
    console.log("# Previous version: " + version);

    if(argv.M | argv.major)
    {
      updateMajor();
    }
    if(argv.m | argv.minor)
    {
      updateMinor();
    }
    if(argv.p | argv.patch)
    {
      updatePatch();
    }
    console.log("# Actual version: " + version);
  }
  else {
    console.error('VERSION file was not found.');
  }
}

function updateMajor ()
{
  version = version.replace("\n", "").split(".").map(Number);
  version[0] += 1; version[1] = 0; version[2] = 0;

  updateVersion();
}

function updateMinor ()
{
  version = version.replace("\n", "").split(".").map(Number);
  version[1] += 1; version[2] = 0;

  updateVersion();
}

function updatePatch ()
{
  version = version.replace("\n", "").split(".").map(Number);
  version[2] += 1;

  updateVersion();
}

function updateVersion ()
{
  version = version.join('.');
  fs.writeFileSync('../VERSION',version + "\n");
}
