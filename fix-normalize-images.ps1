$public = Join-Path $PWD 'public'
Get-ChildItem $public -File | ForEach-Object {
    $oldName = $_.Name
    $baseName = [IO.Path]::GetFileNameWithoutExtension($oldName)
    $ext = $_.Extension.ToLower()
    $normalized = $baseName.ToLower() -replace '[^a-z0-9]+','-'
    $normalized = $normalized -replace '(^-|-$)',''
    $normalized += $ext
    if ($normalized -ne $oldName) {
        Rename-Item -Path $_.FullName -NewName $normalized -Force
    }
}

$file = Join-Path $PWD 'pages\index.jsx'
$content = Get-Content $file -Raw
$content = [regex]::Replace($content, 'src="/([^"\s]+)"', {
    param($m)
    $orig = $m.Groups[1].Value
    $baseName = [IO.Path]::GetFileNameWithoutExtension($orig)
    $ext = [IO.Path]::GetExtension($orig).ToLower()
    $normalized = $baseName.ToLower() -replace '[^a-z0-9]+','-'
    $normalized = $normalized -replace '(^-|-$)',''
    return 'src="/' + $normalized + $ext + '"'
})
Set-Content -Path $file -Value $content -Encoding UTF8
Write-Output 'Normalized images and updated src paths.'
