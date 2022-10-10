import confetti from 'canvas-confetti';
import { v4 as uuidV4 } from "uuid"


const list = document.querySelector<HTMLUListElement>("#list")
const form = document.getElementById("#new-task-form") as HTMLFormElement | null
const input = document.querySelector<HTMLInputElement>("#new-task-title")
const button = document.getElementById("#add_button") as HTMLButtonElement

document.addEventListener('click', function() {confetti.create(document.getElementById('canvas') as HTMLCanvasElement, {
  resize: true,
  useWorker: true,
})({ particleCount: 200, spread: 500 })})

form?.addEventListener("submit", e => {
  e.preventDefault()

  if (input?.value== "" || input?.value==null) return

  const task = {
    id: uuidV4,
    title: input.value,
    complete: false,
    createdAt: new Date()
  }

  input.value
})
