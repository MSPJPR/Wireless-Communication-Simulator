// Real-Time Random Process Simulation
function simulateRealTimeRandomProcess() {
  const canvas = document.getElementById('random-canvas');
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const data = Array.from({ length: canvas.width }, () => Math.random() * canvas.height);

    ctx.beginPath();
    ctx.moveTo(0, canvas.height - data[0]);
    data.forEach((value, index) => ctx.lineTo(index, canvas.height - value));
    ctx.strokeStyle = '#ff5733';
    ctx.stroke();
  };

  setInterval(draw, 1000); // Refresh every second
}

// Enhanced Fading Channel Simulation
function simulateEnhancedChannel() {
  const fadingFactor = parseFloat(document.getElementById('fading-factor').value);
  const outputDiv = document.getElementById('channel-output');
  outputDiv.innerHTML = '';

  const signalStrength = 100;

  let result = '<strong>Enhanced Fading Channel Simulation:</strong><br>';
  for (let i = 1; i <= 10; i++) {
    const pathSignal = (signalStrength * fadingFactor * Math.random()).toFixed(2);
    result += `Path ${i}: Signal Strength = ${pathSignal}<br>`;
  }

  outputDiv.innerHTML = result;

  setTimeout(() => outputDiv.innerHTML += "<br><strong>Simulation Complete!</strong>", 500);
}

// Animated BER vs. SNR Performance Simulation
function simulateAnimatedPerformance() {
  const canvas = document.getElementById('performance-canvas');
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const maxSNR = parseInt(document.getElementById('snr-range').value, 10);
  const snrValues = Array.from({ length: maxSNR }, (_, i) => i + 1);
  const berValues = snrValues.map(snr => Math.exp(-snr / 10));

  let step = 0;

  const drawStep = () => {
    if (step >= snrValues.length) return;

    const x = (step / maxSNR) * canvas.width;
    const y = canvas.height - berValues[step] * canvas.height;

    if (step === 0) {
      ctx.beginPath();
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
      ctx.strokeStyle = '#28a745';
      ctx.stroke();
    }
    step++;
    setTimeout(drawStep, 100); // Delay for animation
  };

  drawStep();
}

// Initialize Real-Time Updates
simulateRealTimeRandomProcess();
