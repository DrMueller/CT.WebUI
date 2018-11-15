param (
  [string]$repositoryLocalPath, 
  [string]$buildNumber 
) 


# $filePath= Join-Path -Path $repositoryLocalPath -ChildPath "\src\environments\environment.prod.ts"

# Write-Host "Repository LocalPath: $repositoryLocalPath"
# Write-Host "Environment-File: $filePath"
# Write-Host "Build Number: $buildNumber"

# $environmentContent = Get-Content $filePath
# $replaced = $environmentContent -replace '__BuildNumber__', 'buildNumber'

# Set-Content -Path $filePath -value $replaced
