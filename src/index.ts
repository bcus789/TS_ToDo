import confetti from 'canvas-confetti';

console.log("Hi")

confetti.create(document.getElementById('canvas') as HTMLCanvasElement, {
  resize: true,
  useWorker: true,
})({ particleCount: 200, spread: 500 });
