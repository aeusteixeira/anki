#!/usr/bin/env python3
"""
Script para gerar ícones do PWA
Requer: pip install Pillow
Execute: python icons/gerar-icones.py
"""

try:
    from PIL import Image, ImageDraw, ImageFont
    import os
except ImportError:
    print("⚠️  Pillow não está instalado.")
    print("Instale com: pip install Pillow")
    exit(1)

def criar_icone(tamanho, output_path):
    """Cria um ícone PNG com o tamanho especificado"""
    # Criar imagem com gradiente
    img = Image.new('RGB', (tamanho, tamanho), color='#667eea')
    draw = ImageDraw.Draw(img)
    
    # Desenhar fundo com gradiente diagonal
    for y in range(tamanho):
        for x in range(tamanho):
            # Gradiente diagonal
            ratio = (x + y) / (tamanho * 2)
            r1, g1, b1 = 102, 126, 234  # #667eea
            r2, g2, b2 = 118, 75, 162   # #764ba2
            r = int(r1 + (r2 - r1) * ratio)
            g = int(g1 + (g2 - g1) * ratio)
            b = int(b1 + (b2 - b1) * ratio)
            draw.point((x, y), fill=(r, g, b))
    
    # Criar máscara para bordas arredondadas
    mask = Image.new('L', (tamanho, tamanho), 0)
    mask_draw = ImageDraw.Draw(mask)
    radius = int(tamanho * 0.2)
    
    # Desenhar retângulo arredondado na máscara
    mask_draw.rounded_rectangle([(0, 0), (tamanho, tamanho)], radius=radius, fill=255)
    
    # Aplicar máscara ao fundo
    img.putalpha(mask)
    
    # Converter para RGB final
    final_img = Image.new('RGB', (tamanho, tamanho), (255, 255, 255))
    final_img.paste(img, (0, 0), img.split()[3] if img.mode == 'RGBA' else None)
    
    draw = ImageDraw.Draw(final_img)
    
    # Tentar carregar fonte, usar padrão se não encontrar
    try:
        # Tentar usar fonte do sistema
        font_size_main = int(tamanho * 0.35)
        font_size_sub = int(tamanho * 0.15)
        try:
            font_main = ImageFont.truetype("arial.ttf", font_size_main)
            font_sub = ImageFont.truetype("arial.ttf", font_size_sub)
        except:
            try:
                font_main = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", font_size_main)
                font_sub = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", font_size_sub)
            except:
                font_main = ImageFont.load_default()
                font_sub = ImageFont.load_default()
    except:
        font_main = ImageFont.load_default()
        font_sub = ImageFont.load_default()
    
    # Texto principal "E365"
    text_main = "E365"
    bbox = draw.textbbox((0, 0), text_main, font=font_main)
    text_width = bbox[2] - bbox[0]
    text_height = bbox[3] - bbox[1]
    draw.text(
        ((tamanho - text_width) / 2, tamanho / 2 - tamanho * 0.1 - text_height / 2),
        text_main,
        fill='white',
        font=font_main
    )
    
    # Texto secundário "English"
    text_sub = "English"
    bbox = draw.textbbox((0, 0), text_sub, font=font_sub)
    text_width = bbox[2] - bbox[0]
    draw.text(
        ((tamanho - text_width) / 2, tamanho / 2 + tamanho * 0.05),
        text_sub,
        fill=(255, 255, 255, 230),
        font=font_sub
    )
    
    # Salvar
    final_img.save(output_path, 'PNG')
    print(f"✓ Ícone {tamanho}x{tamanho} criado: {output_path}")

def main():
    # Obter diretório do script
    script_dir = os.path.dirname(os.path.abspath(__file__))
    
    print("Gerando ícones do PWA...\n")
    
    # Criar ícones
    criar_icone(192, os.path.join(script_dir, 'icon-192.png'))
    criar_icone(512, os.path.join(script_dir, 'icon-512.png'))
    
    print("\n✓ Todos os ícones foram criados com sucesso!")
    print(f"Localização: {script_dir}")

if __name__ == '__main__':
    main()
