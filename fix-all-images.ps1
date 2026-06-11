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
        $tmpName = [guid]::NewGuid().ToString() + $ext
        Rename-Item -Path $_.FullName -NewName $tmpName -Force
        Rename-Item -Path (Join-Path $public $tmpName) -NewName $newName -Force
    }
}

$content = [regex]::Replace($content, 'src="/([^"]+)"', {
    param($m)
    $orig = $m.Groups[1].Value
    $baseName = [IO.Path]::GetFileNameWithoutExtension($orig)
    $ext = [IO.Path]::GetExtension($orig).ToLower()
    $normalizedCore = $baseName.ToLower() -replace '[^a-z0-9]+','-'
    $normalizedCore = $normalizedCore -replace '(^-|-$)',''
    return 'src="/' + $normalizedCore + $ext + '"'
})

Set-Content -Path $indexPath -Value $content -Encoding UTF8
Write-Output 'All public images normalized and page src values updated.'
