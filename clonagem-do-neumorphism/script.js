const element = document.getElementById('element');
const distanceInput = document.getElementById('distance');
const blurInput = document.getElementById('blur');
const intensityInput = document.getElementById('intensity');
const cssOutput = document.getElementById('css-output');
const colorPicker = document.getElementById('color-picker');
const colorValue = document.getElementById('color-value');

// Labels
const labelDistance = document.getElementById('label-distance');
const labelBlur = document.getElementById('label-blur');
const labelIntensity = document.getElementById('label-intensity');

let currentRadius = 40;

function updateRadius(val) {
    currentRadius = val;
    update();
}

function update() {
    const selectedColor = colorPicker.value;

document.documentElement.style.setProperty('--bg-color', selectedColor);

colorValue.innerText = selectedColor;
    const dist = distanceInput.value;
    const blur = blurInput.value;
    const intensity = intensityInput.value;

    // Atualiza labels
    labelDistance.innerText = `${dist}px`;
    labelBlur.innerText = `${blur}px`;
    labelIntensity.innerText = intensity;

    // Cores de sombra suaves baseadas na intensidade
    // O segredo do neumorfismo é usar a cor do fundo com transparência
    const darkShadow = `rgba(163, 177, 198, ${intensity})`;
    const lightShadow = `rgba(255, 255, 255, 0.8)`;

    const shadowStr = `${dist}px ${dist}px ${blur}px ${darkShadow}, 
-${dist}px -${dist}px ${blur}px ${lightShadow}`;

    // Aplica ao elemento
    element.style.borderRadius = `${currentRadius}px`;
    element.style.boxShadow = shadowStr;

    // Atualiza o texto do código
    cssOutput.textContent = `border-radius: ${currentRadius}px;\nbackground: ${selectedColor};\nbox-shadow: ${shadowStr};`;
}

// Listeners para sliders funcionais em tempo real
[distanceInput, blurInput, intensityInput].forEach(input => {
    input.addEventListener('input', update);
    colorPicker.addEventListener('input', update);
});

// Botão de copiar
document.getElementById('copy-btn').addEventListener('click', () => {
    navigator.clipboard.writeText(cssOutput.textContent);
    const originalText = document.getElementById('copy-btn').innerText;
    document.getElementById('copy-btn').innerText = "Copiado!";
    setTimeout(() => {
        document.getElementById('copy-btn').innerText = originalText;
    }, 1500);
});

// Inicializa o visual
update();
