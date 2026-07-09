$ErrorActionPreference = "Stop"

Write-Host "Starting Enterprise Reorganization..." -ForegroundColor Cyan

# 1. Delete redundant route folders
$foldersToDelete = @(
    "src/app/email-assistant",
    "src/app/fee-collection",
    "src/app/test-generator",
    "src/app/voice-to-excel",
    "src/app/privacy-policy",
    "src/app/terms-and-condition"
)

foreach ($folder in $foldersToDelete) {
    if (Test-Path $folder) {
        Remove-Item -Recurse -Force $folder
        Write-Host "Deleted redundant folder: $folder" -ForegroundColor Green
    }
}

# 2. Rename src/api to src/services
if (Test-Path "src/api") {
    Rename-Item -Path "src/api" -NewName "services"
    Write-Host "Renamed src/api to src/services" -ForegroundColor Green
}

# 3. Update Import Paths from @/api to @/services
Write-Host "Updating import paths across the codebase..." -ForegroundColor Yellow

$files = Get-ChildItem -Path "src" -Recurse -Include *.ts, *.tsx
foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    
    # Check if file has the old import
    if ($content -match "@\/api\/") {
        # Replace and save
        $newContent = $content -replace "@\/api\/", "@/services/"
        Set-Content -Path $file.FullName -Value $newContent
        Write-Host "Updated imports in: $($file.Name)" -ForegroundColor Green
    }
}

Write-Host "Reorganization complete! You can now run 'npm run build' to verify." -ForegroundColor Cyan
