import { Module } from "../core/module";

export class Piano extends Module {
  constructor(type, text) {
    super(type, text);
    this.body = document.querySelector("body");
    this.WHITE_KEYS = ["z", "x", "c", "v", "b", "n", "m"];
    this.BLACK_KEYS = ["s", "d", "g", "h", "j"];
  }

  trigger() {
    this.start();
  }

  start() {
    this.body.innerHTML = `
    <div class="piano">
    <div class="key key-w" data-note="C">C</div>
    <div class="key key-b" data-note="Cs">C#</div>
    <div class="key key-w" data-note="D">D</div>
    <div class="key key-b" data-note="Ds">D#</div>
    <div class="key key-w" data-note="E">E</div>
    <div class="key key-w" data-note="F">F</div>
    <div class="key key-b" data-note="Fs">F#</div>
    <div class="key key-w" data-note="G">G</div>
    <div class="key key-b" data-note="Gs">G#</div>
    <div class="key key-w" data-note="A">A</div>
    <div class="key key-b" data-note="As">A#</div>
    <div class="key key-w" data-note="B">B</div>
   </div>

   <audio id="C" src="https://res.cloudinary.com/dspfsamgq/video/upload/v1584002889/piano/C.wav"></audio>
   <audio id="Cs" src="https://res.cloudinary.com/dspfsamgq/video/upload/v1584002889/piano/Cs.wav"></audio>
   <audio id="D" src="https://res.cloudinary.com/dspfsamgq/video/upload/v1584002888/piano/D.wav"></audio>
   <audio id="Ds" src="https://res.cloudinary.com/dspfsamgq/video/upload/v1584002889/piano/Ds.wav"></audio>
   <audio id="E" src="https://res.cloudinary.com/dspfsamgq/video/upload/v1584002889/piano/E.wav"></audio>
   <audio id="F" src="https://res.cloudinary.com/dspfsamgq/video/upload/v1584002890/piano/F.wav"></audio>
   <audio id="Fs" src="https://res.cloudinary.com/dspfsamgq/video/upload/v1584002889/piano/Fs.wav"></audio>
   <audio id="G" src="https://res.cloudinary.com/dspfsamgq/video/upload/v1584002889/piano/G.wav"></audio>
   <audio id="Gs" src="https://res.cloudinary.com/dspfsamgq/video/upload/v1584002889/piano/Gs.wav"></audio>
   <audio id="A" src="https://res.cloudinary.com/dspfsamgq/video/upload/v1584002888/piano/A.wav"></audio>
   <audio id="As" src="https://res.cloudinary.com/dspfsamgq/video/upload/v1584002888/piano/As.wav"></audio>
   <audio id="B" src="https://res.cloudinary.com/dspfsamgq/video/upload/v1584002889/piano/B.wav"></audio>  `;

    let keys = document.querySelectorAll(".key");
    const whiteKeys = document.querySelectorAll(".key.key-w");
    const blackKeys = document.querySelectorAll(".key.key-b");

    document.addEventListener("keydown", (e) => {
      const key = e.key;

      const whiteKeyIndex = this.WHITE_KEYS.indexOf(key);
      const blackKeyIndex = this.BLACK_KEYS.indexOf(key);

      if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex]);
      if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex]);
    });

    function playNote(key) {
      let note = document.getElementById(key.dataset.note);
      key.classList.add("active");
      note.currentTime = 0;
      note.play();
      note.addEventListener("ended", () => {
        key.classList.remove("active");
      });
    }
    const instruction = document.createElement("div");
    instruction.innerText = `Вы можете сыграть на данном пианино используя кнопки клавиатуры.
    БЕЛЫЕ : "Z", "X", "C", "V", "B", "N", "M".
    ЧЕРНЫЕ : "S", "D", "G", "H", "J".`;
    instruction.classList.add("instruction");
    this.body.prepend(instruction);
  }
}
