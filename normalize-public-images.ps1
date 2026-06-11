$public = Join-Path $PWD 'public'
$indexPath = Join-Path $PWD 'pages\index.jsx'
$content = Get-Content $indexPath -Raw

Get-ChildItem $public -File | ForEach-Object {
    $oldName = $_.Name
    $baseName = [IO.Path]::GetFileNameWithoutExtension($oldName)
    $ext = $_.Extension.ToLower()
    $normalizedCore = $baseName.ToLower() -replace '[^a-z0-9]+','-'
    $normalizedCore = $normalizedCore -replace '(^-|-$)',''
    $newName = "$normalizedCore$ext"

    if ($oldName -ne $newName) {
        $tempName = [guid]::NewGuid().ToString() + $ext
        Rename-Item -Path $_.FullName -NewName $tempName -Force
        Rename-Item -Path (Join-Path $public $tempName) -NewName $newName -Force
        $escaped = [regex]::Escape('/' + $oldName)
        $content = [regex]::Replace($content, $escaped, '/' + $newName)
    }
}

Set-Content -Path $indexPath -Value $content -Encoding UTF8
Write-Output 'Public image filenames normalized and index.jsx updated.'
