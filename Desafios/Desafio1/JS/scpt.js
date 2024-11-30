
function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return { r, g, b };
}


function rgbToHex(r, g, b) {
    const toHex = (c) => {
        const hex = c.toString(16).padStart(2, '0');
        return hex;
    };
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}


document.getElementById('changeColorBtn').addEventListener('click', function() {
    const { r, g, b } = getRandomColor();
    const hexColor = rgbToHex(r, g, b);
    
   
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    
  
    document.getElementById('colorCode').textContent = `Código da Cor: ${hexColor}`;
});