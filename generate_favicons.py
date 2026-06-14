import os
import urllib.request
from PIL import Image, ImageDraw, ImageFont

def main():
    print("Starting favicon generation script...")

    # 1. Download Cormorant Garamond variable font
    font_url = "https://raw.githubusercontent.com/google/fonts/main/ofl/cormorantgaramond/CormorantGaramond%5Bwght%5D.ttf"
    font_path = "cormorant.ttf"
    
    if not os.path.exists(font_path):
        print(f"Downloading font from {font_url}...")
        try:
            urllib.request.urlretrieve(font_url, font_path)
            print("Font downloaded successfully.")
        except Exception as e:
            print(f"Failed to download font: {e}")
            return
    else:
        print("Font already exists locally.")

    # 2. Create high-resolution master canvas (1024x1024)
    # Using transparent background to clip the circle correctly
    size = 1024
    master = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(master)

    # 3. Draw a solid black circle (#111111) filling the canvas (with a 2% safety padding)
    padding = int(size * 0.02)
    circle_box = [padding, padding, size - padding, size - padding]
    draw.ellipse(circle_box, fill="#111111")

    # 4. Load font and draw text "HR" in white (#FFFFFF)
    # Font size of 550 balances elegance with small-scale legibility
    font_size = 550
    try:
        font = ImageFont.truetype(font_path, font_size)
    except Exception as e:
        print(f"Error loading TTF font: {e}")
        return

    # Draw centered text using "mm" (middle-middle) anchor alignment
    # Shift vertical offset slightly (-20px) to compensate for baseline metrics
    text = "HR"
    draw.text((size // 2, (size // 2) - 20), text, font=font, fill="#FFFFFF", anchor="mm")

    # 5. Define output directories
    public_dir = r"C:\Users\VICTUS\Portfolio himanshu\public"
    app_dir = r"C:\Users\VICTUS\Portfolio himanshu\src\app"

    # Make sure output directories exist
    os.makedirs(public_dir, exist_ok=True)
    os.makedirs(app_dir, exist_ok=True)

    # 6. Save favicon files (resizing using LANCZOS for premium quality)
    print("Resizing and saving assets...")
    
    # PWA Icons
    master.resize((512, 512), Image.Resampling.LANCZOS).save(
        os.path.join(public_dir, "android-chrome-512x512.png"), format="PNG"
    )
    master.resize((192, 192), Image.Resampling.LANCZOS).save(
        os.path.join(public_dir, "android-chrome-192x192.png"), format="PNG"
    )

    # Apple Touch Icon
    master.resize((180, 180), Image.Resampling.LANCZOS).save(
        os.path.join(public_dir, "apple-touch-icon.png"), format="PNG"
    )

    # Standard browser PNG icons
    master.resize((32, 32), Image.Resampling.LANCZOS).save(
        os.path.join(public_dir, "favicon-32x32.png"), format="PNG"
    )
    master.resize((16, 16), Image.Resampling.LANCZOS).save(
        os.path.join(public_dir, "favicon-16x16.png"), format="PNG"
    )

    # Multi-resolution ICO (16x16, 32x32, 48x48) for app/favicon.ico
    # We save as ICO format
    master.save(
        os.path.join(app_dir, "favicon.ico"),
        format="ICO",
        sizes=[(16, 16), (32, 32), (48, 48)]
    )

    print("Favicon generation completed successfully!")

if __name__ == "__main__":
    main()
