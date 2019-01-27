import {
    Fire
} from "doom-fire";
import { memory } from "doom-fire/doom_fire_bg";

let pixelSize = 5;
const canvas = document.querySelector('canvas'),
    ctx = canvas.getContext('2d');

canvas.style.width = '100%'
canvas.style.height = '100%';
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

const palette = ["#070707", "#1f0707", "#2f0f07", "#470f07", "#571707", "#671f07", "#771f07", "#8f2707", "#9f2f07", "#af3f07", "#bf4707", "#c74707", "#df4f07", "#df5707", "#df5707", "#d75f07", "#d75f07", "#d7670f", "#cf6f0f", "#cf770f", "#cf7f0f", "#cf8717", "#c78717", "#c78f17", "#c7971f", "#bf9f1f", "#bf9f1f", "#bfa727", "#bfa727", "#bfaf2f", "#b7af2f", "#b7b72f", "#b7b737", "#cfcf6f", "#dfdf9f", "#efefc7", "#ffffff"];
const height = Math.floor(canvas.height / pixelSize);
const width = Math.floor(canvas.width / pixelSize);

const arrLen = height * width;

let fire = Fire.new(height, width, palette.length);
fire.update_cells();
const cells = new Uint8Array(memory.buffer, fire.get_cells(), arrLen);
window.cells = cells;
function draw() {
    ctx.clearRect(0, 0, canvas.height, canvas.width);
    let color, ctr = 0;
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            color = palette[cells[ctr]];
            ctx.fillStyle = color;
            ctx.fillRect(x * pixelSize, y * pixelSize, pixelSize, pixelSize);
            ctr += 1;

        }
    }
    fire.update_cells();
    requestAnimationFrame(draw)
}

draw();

document.getElementById('pixelSize').addEventListener('change', (e) => {
    pixelSize = e.target.value;
    fire = Fire.new(height, width, palette.length);
    draw();
});