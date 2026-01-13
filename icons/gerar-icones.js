// Script Node.js para gerar ícones do PWA
// Execute: node icons/gerar-icones.js

const fs = require('fs');
const path = require('path');

// Função para criar ícone PNG usando canvas (requer canvas npm package)
// Se não tiver canvas instalado, use o gerar-icones.html no navegador

function criarIconeBase64(tamanho) {
    // Criar um canvas virtual (requer: npm install canvas)
    try {
        const { createCanvas } = require('canvas');
        const canvas = createCanvas(tamanho, tamanho);
        const ctx = canvas.getContext('2d');
        
        // Gradiente de fundo
        const gradient = ctx.createLinearGradient(0, 0, tamanho, tamanho);
        gradient.addColorStop(0, '#667eea');
        gradient.addColorStop(1, '#764ba2');
        
        // Fundo com bordas arredondadas
        ctx.fillStyle = gradient;
        ctx.beginPath();
        const radius = tamanho * 0.2;
        ctx.moveTo(radius, 0);
        ctx.lineTo(tamanho - radius, 0);
        ctx.quadraticCurveTo(tamanho, 0, tamanho, radius);
        ctx.lineTo(tamanho, tamanho - radius);
        ctx.quadraticCurveTo(tamanho, tamanho, tamanho - radius, tamanho);
        ctx.lineTo(radius, tamanho);
        ctx.quadraticCurveTo(0, tamanho, 0, tamanho - radius);
        ctx.lineTo(0, radius);
        ctx.quadraticCurveTo(0, 0, radius, 0);
        ctx.closePath();
        ctx.fill();
        
        // Texto principal
        ctx.fillStyle = 'white';
        ctx.font = `bold ${tamanho * 0.35}px Arial`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('E365', tamanho / 2, tamanho / 2 - tamanho * 0.1);
        
        // Texto secundário
        ctx.font = `${tamanho * 0.15}px Arial`;
        ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
        ctx.fillText('English', tamanho / 2, tamanho / 2 + tamanho * 0.15);
        
        // Salvar como PNG
        const buffer = canvas.toBuffer('image/png');
        const filename = path.join(__dirname, `icon-${tamanho}.png`);
        fs.writeFileSync(filename, buffer);
        console.log(`✓ Ícone ${tamanho}x${tamanho} criado: ${filename}`);
        
        return true;
    } catch (error) {
        console.log('Canvas não disponível. Use o gerar-icones.html no navegador.');
        console.log('Ou instale: npm install canvas');
        return false;
    }
}

// Gerar ícones
console.log('Gerando ícones do PWA...\n');
const icon192 = criarIconeBase64(192);
const icon512 = criarIconeBase64(512);

if (icon192 && icon512) {
    console.log('\n✓ Todos os ícones foram criados com sucesso!');
} else {
    console.log('\n⚠ Use o arquivo gerar-icones.html no navegador para gerar os ícones.');
}
