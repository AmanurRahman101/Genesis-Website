import os
import numpy as np
from PIL import Image, ImageFilter
from scipy.ndimage import label

UPLOAD_DIR = r'C:\Users\rahma\.gemini\antigravity-ide\brain\fbaf005e-716e-41d4-ac44-9d74c1c4d1f2\.user_uploaded'
OUTPUT_DIR = r'c:\Users\rahma\OneDrive\Documents\Projects\Personal Projects\Genesis-Website\images\products'

CANVAS_WIDTH = 800
CANVAS_HEIGHT = 600

# Optimal content bounds inside 800x600 canvas
MAX_CONTENT_W = 720
MAX_CONTENT_H = 500

def clean_image_background(im, bg_type='auto', tolerance=22):
    arr = np.array(im.convert('RGBA'))
    
    if bg_type == 'blue':
        r = arr[:, :, 0].astype(float)
        g = arr[:, :, 1].astype(float)
        b = arr[:, :, 2].astype(float)
        is_bg_candidate = (b - r > 20) & (b - g > 8)
    else:
        # Background is either transparent (alpha < 50) OR near-white (all channels >= 255 - tolerance)
        is_bg_candidate = (arr[:, :, 3] < 50) | (
            (arr[:, :, 0] >= (255 - tolerance)) & 
            (arr[:, :, 1] >= (255 - tolerance)) & 
            (arr[:, :, 2] >= (255 - tolerance))
        )
    
    labeled, num_features = label(is_bg_candidate)
    
    # Border-connected pixels
    border_labels = set()
    border_labels.update(labeled[0, :])
    border_labels.update(labeled[-1, :])
    border_labels.update(labeled[:, 0])
    border_labels.update(labeled[:, -1])
    border_labels.discard(0)
    
    bg_mask = np.isin(labeled, list(border_labels))
    arr[bg_mask, 3] = 0
    return Image.fromarray(arr)

def standardize_product_image(src_path, dst_path, bg_type='auto'):
    im = Image.open(src_path)
    cleaned = clean_image_background(im, bg_type)
        
    # Get bounding box of subject
    bbox = cleaned.getbbox()
    if bbox:
        subject = cleaned.crop(bbox)
    else:
        subject = cleaned
        
    sw, sh = subject.size
    
    # Calculate scale factor
    scale = min(MAX_CONTENT_W / sw, MAX_CONTENT_H / sh)
    target_w = max(1, int(sw * scale))
    target_h = max(1, int(sh * scale))
    
    # Resize with high quality Lanczos
    resized = subject.resize((target_w, target_h), Image.Resampling.LANCZOS)
    
    # If upscaled, apply subtle unsharp mask to keep lines crisp
    if scale > 1.2:
        resized = resized.filter(ImageFilter.UnsharpMask(radius=1.2, percent=80, threshold=3))
        
    # Place onto standardized 800x600 transparent canvas
    canvas = Image.new('RGBA', (CANVAS_WIDTH, CANVAS_HEIGHT), (0, 0, 0, 0))
    pos_x = (CANVAS_WIDTH - target_w) // 2
    pos_y = (CANVAS_HEIGHT - target_h) // 2
    
    canvas.paste(resized, (pos_x, pos_y), resized)
    canvas.save(dst_path, 'PNG', optimize=True)
    print(f"Standardized: {os.path.basename(dst_path)} ({sw}x{sh} -> {target_w}x{target_h} centered on {CANVAS_WIDTH}x{CANVAS_HEIGHT})")

ALL_IMAGES = [
    # 13 Unimed instruments
    ('media_1789324342931.png', 'unimed-u200.png', 'auto'),
    ('media_1789324355876.png', 'unimed-u180.png', 'auto'),
    ('media_1789324247324.png', 'unimed-u300.png', 'auto'),
    ('media_1789324343089.png', 'unimed-uh560.png', 'auto'),
    ('media_1789324342961.png', 'unimed-uh580.png', 'auto'),
    ('media_1789324342988.png', 'unimed-labas-m.png', 'auto'),
    ('media_1789324247230.png', 'unimed-uri-300.png', 'auto'),
    ('media_1789324365215.png', 'unimed-fa-60.png', 'auto'),
    ('media_1789324247110.png', 'unimed-vsa-60.png', 'auto'),
    ('media_1789324355867.png', 'unimed-u8-pro.png', 'auto'),
    ('media_1789324355922.png', 'unimed-u8.png', 'auto'),
    ('media_1789324343052.png', 'unimed-ubg-60.png', 'auto'),
    ('media_1789324365187.png', 'unimed-cee-5.png', 'auto'),
    
    # 7 Previous medical machines
    ('media_1789300442682.png', 'canon-aquilion-precision.png', 'auto'),
    ('media_1789300448281.png', 'canon-vantage-galan-3t.png', 'auto'),
    ('media_1789300452871.png', 'olympus-evis.png', 'auto'),
    ('media_1789300457416.png', 'olympus-ebus-system.png', 'auto'),
    ('media_1789300463074.png', 'olympus-diathermy-esg-150.png', 'blue'),
    ('media_1789300472814.png', 'gemss-spinel-3g-c-arm.png', 'auto'),
    ('media_1789300477991.png', 'ecoray-hf525-plus.png', 'auto'),
]

os.makedirs(OUTPUT_DIR, exist_ok=True)

for src_name, dst_name, bg_type in ALL_IMAGES:
    src = os.path.join(UPLOAD_DIR, src_name)
    dst = os.path.join(OUTPUT_DIR, dst_name)
    if os.path.exists(src):
        standardize_product_image(src, dst, bg_type)
    else:
        print(f"Warning: {src} not found!")

print("All 20 images standardized and saved to images/products/!")
