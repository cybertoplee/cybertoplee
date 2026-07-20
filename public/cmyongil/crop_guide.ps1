Add-Type -AssemblyName System.Drawing

$srcPath = "C:\Users\gyul3\.gemini\antigravity\brain\f830e67d-b1a8-495f-9c9d-5ab430005a61\media__1784549134486.jpg"
$outDir = "c:\dev\cybertoplee\public\cmyongil\image\cafe"

if (-not (Test-Path $outDir)) {
    New-Item -ItemType Directory -Path $outDir -Force
}

$srcImg = [System.Drawing.Image]::FromFile($srcPath)
$w = $srcImg.Width
$h = $srcImg.Height

Write-Host "Source Image Dimensions: $w x $h"

# 4 Crop Rectangles (excluding header and outer borders)
# Step 1: Top-Left
# Step 2: Top-Right
# Step 3: Bottom-Left
# Step 4: Bottom-Right

$halfW = [int]($w / 2)
$halfH = [int](($h - 100) / 2)
$topOffset = [int]($h * 0.08)

# Step 1 (Top Left)
$rect1 = New-Object System.Drawing.Rectangle([int]($w * 0.03), [int]($h * 0.09), [int]($w * 0.45), [int]($h * 0.42))
# Step 2 (Top Right)
$rect2 = New-Object System.Drawing.Rectangle([int]($w * 0.51), [int]($h * 0.09), [int]($w * 0.45), [int]($h * 0.42))
# Step 3 (Bottom Left)
$rect3 = New-Object System.Drawing.Rectangle([int]($w * 0.03), [int]($h * 0.53), [int]($w * 0.45), [int]($h * 0.43))
# Step 4 (Bottom Right)
$rect4 = New-Object System.Drawing.Rectangle([int]($w * 0.51), [int]($h * 0.53), [int]($w * 0.45), [int]($h * 0.43))

$rects = @($rect1, $rect2, $rect3, $rect4)

for ($i = 0; $i -lt 4; $i++) {
    $r = $rects[$i]
    $bmp = New-Object System.Drawing.Bitmap($r.Width, $r.Height)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.DrawImage($srcImg, (New-Object System.Drawing.Rectangle(0, 0, $r.Width, $r.Height)), $r, [System.Drawing.GraphicsUnit]::Pixel)
    $g.Dispose()
    
    $stepNum = $i + 1
    $outPath = Join-Path $outDir "guide_step$stepNum.jpg"
    $bmp.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Jpeg)
    $bmp.Dispose()
    Write-Host "Saved guide_step$stepNum.jpg to $outPath"
}

$srcImg.Dispose()
Write-Host "Cropping completed successfully!"
