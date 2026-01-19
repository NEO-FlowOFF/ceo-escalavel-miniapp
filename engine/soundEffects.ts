
let audioCtx: AudioContext | null = null;

// Get AudioContext only if already initialized
const getCtx = (): AudioContext | null => {
  if (!audioCtx) return null;

  if (audioCtx.state === 'suspended') {
    audioCtx.resume().catch(() => { });
  }

  return audioCtx;
};

// Create and unlock AudioContext on first user gesture
const initAudioContext = () => {
  if (audioCtx) return; // Already initialized

  try {
    audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
    if (audioCtx.state === 'suspended') {
      audioCtx.resume().catch(() => { });
    }
  } catch (e) {
    // AudioContext not supported
  }
};

// Listen for first user gesture to create AudioContext
if (typeof document !== 'undefined') {
  const events = ['click', 'touchstart', 'keydown'];
  const handler = () => {
    initAudioContext();
    events.forEach(e => document.removeEventListener(e, handler));
  };
  events.forEach(e => document.addEventListener(e, handler, { passive: true }));
}



/**
 * Som de digitação: Um "click" tátil e seco, inspirado em teclados mecânicos premium.
 * Usa um pulso de ruído filtrado em vez de um oscilador puro.
 */
export const playTyping = () => {
  const ctx = getCtx();
  if (!ctx) return;
  const now = ctx.currentTime;

  const noiseBuffer = ctx.createBuffer(1, ctx.sampleRate * 0.02, ctx.sampleRate);
  const output = noiseBuffer.getChannelData(0);
  for (let i = 0; i < noiseBuffer.length; i++) {
    output[i] = Math.random() * 2 - 1;
  }

  const source = ctx.createBufferSource();
  source.buffer = noiseBuffer;

  const filter = ctx.createBiquadFilter();
  filter.type = 'bandpass';
  filter.frequency.setValueAtTime(1200, now);
  filter.Q.setValueAtTime(1, now);

  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0.008, now);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.02);

  source.connect(filter);
  filter.connect(gain);
  gain.connect(ctx.destination);

  source.start(now);
};

/**
 * Notificação: Um "chime" duplo em intervalo de quinta, suave e cristalino.
 */
export const playNotification = () => {
  const ctx = getCtx();
  if (!ctx) return;
  const now = ctx.currentTime;

  const playTone = (freq: number, delay: number, vol: number) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const filter = ctx.createBiquadFilter();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, now + delay);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(2000, now + delay);

    gain.gain.setValueAtTime(0, now + delay);
    gain.gain.linearRampToValueAtTime(vol, now + delay + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + delay + 0.3);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now + delay);
    osc.stop(now + delay + 0.4);
  };

  playTone(880, 0, 0.04);       // A5
  playTone(1318.51, 0.04, 0.02); // E6
};

/**
 * Alerta/Crash: Um "thrum" de baixa frequência, autoritário mas não estridente.
 * Simula um erro de sistema industrial.
 */
export const playAlert = () => {
  const ctx = getCtx();
  if (!ctx) return;
  const now = ctx.currentTime;

  const osc = ctx.createOscillator();
  const filter = ctx.createBiquadFilter();
  const gain = ctx.createGain();

  osc.type = 'triangle';
  osc.frequency.setValueAtTime(120, now);
  osc.frequency.exponentialRampToValueAtTime(40, now + 0.5);

  filter.type = 'lowpass';
  filter.frequency.setValueAtTime(400, now);

  gain.gain.setValueAtTime(0.08, now);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.5);

  osc.connect(filter);
  filter.connect(gain);
  gain.connect(ctx.destination);

  osc.start(now);
  osc.stop(now + 0.6);
};

/**
 * Deploy: Um som de impacto profundo ("thud") com uma ressonância metálica curta.
 */
export const playDeploy = () => {
  const ctx = getCtx();
  if (!ctx) return;
  const now = ctx.currentTime;

  // Camada 1: Sub Bass (Impacto)
  const sub = ctx.createOscillator();
  const subGain = ctx.createGain();
  sub.type = 'sine';
  sub.frequency.setValueAtTime(80, now);
  sub.frequency.exponentialRampToValueAtTime(20, now + 0.4);
  subGain.gain.setValueAtTime(0.15, now);
  subGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.5);
  sub.connect(subGain);
  subGain.connect(ctx.destination);
  sub.start(now);
  sub.stop(now + 0.5);

  // Camada 2: Ressonância Metálica (O "Click" do Deploy)
  const meta = ctx.createOscillator();
  const metaFilter = ctx.createBiquadFilter();
  const metaGain = ctx.createGain();

  meta.type = 'triangle';
  meta.frequency.setValueAtTime(1200, now);
  metaFilter.type = 'highpass';
  metaFilter.frequency.setValueAtTime(1000, now);

  metaGain.gain.setValueAtTime(0.03, now);
  metaGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.2);

  meta.connect(metaFilter);
  metaFilter.connect(metaGain);
  metaGain.connect(ctx.destination);

  meta.start(now);
  meta.stop(now + 0.2);
};
