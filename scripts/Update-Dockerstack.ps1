param (
  [string]$repositoryLocalPath, 
  [string]$imageName 
) 

$filePath= Join-Path -Path $repositoryLocalPath -ChildPath "\docker-stack.yml"

$environmentContent = Get-Content $filePath
$replaced = $environmentContent -replace '__ImageName__', $imageName

Set-Content -Path $filePath -value $replaced
