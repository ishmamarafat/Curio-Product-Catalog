$public = Join-Path $PWD 'public'
$file = Join-Path $PWD 'pages\index.jsx'
$content = Get-Content $file -Raw

Get-ChildItem $public -File | ForEach-Object {
    $old = $_.Name
    $baseName = [IO.Path]::GetFileNameWithoutExtension($old)
    $ext = $_.Extension.ToLower()
    $normalizedCore = $baseName.ToLower() -replace '[^a-z0-9]+','-'
    $normalizedCore = $normalizedCore -replace '(^-|-$)',''
    $newName = "$normalizedCore$ext"

    if ($old -ne $newName) {
        $tmpName = ([guid]::NewGuid().ToString() + $ext)
        $tmpPath = Join-Path $public $tmpName
        Rename-Item -Path (Join-Path $public $old) -NewName $tmpName -Force
        Rename-Item -Path $tmpPath -NewName $newName -Force
        $content = $content -replace [regex]::Escape('/' + $old), '/' + $newName
    }
}

Set-Content -Path $file -Value $content -Encoding UTF8
Write-Output 'Normalized public files and updated index.jsx.'
