import {
    Fire
} from "doom-fire";
import {
    memory
} from "doom-fire/doom_fire_bg";

class DoomAnimation {

    constructor(options = {}) {
        this.options = Object.assign({
           canvasSelector: 'canvas'
        }, options);

        this.palette = ["#070707", "#1f0707", "#2f0f07", "#470f07", "#571707", "#671f07", "#771f07", "#8f2707", "#9f2f07", "#af3f07", "#bf4707", "#c74707", "#df4f07", "#df5707", "#df5707", "#d75f07", "#d75f07", "#d7670f", "#cf6f0f", "#cf770f", "#cf7f0f", "#cf8717", "#c78717", "#c78f17", "#c7971f", "#bf9f1f", "#bf9f1f", "#bfa727", "#bfa727", "#bfaf2f", "#b7af2f", "#b7b72f", "#b7b737", "#cfcf6f", "#dfdf9f", "#efefc7", "#ffffff"];
        this.canvas = document.querySelector(this.options.canvasSelector);
        this.ctx = canvas.getContext('2d');

        this.bind();
        this.setCanvasDimensions();
        this.setFireObject();
        this.draw();
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.height, this.canvas.width);
        this.fire.update_cells();

        let color, ctr = 0;
        for (let y = 0; y < this.height; y++) {
            for (let x = 0; x < this.width; x++) {
                color = this.palette[this.cells[ctr]];
                this.ctx.fillStyle = color;
                this.ctx.fillRect(x * this.pixelSize, y * this.pixelSize, this.pixelSize, this.pixelSize);
                ctr += 1;

            }
        }
        requestAnimationFrame(this.draw.bind(this));
    }

    bind() {}

    setCanvasDimensions() {
        this.canvas.style.width = '100%'
        this.canvas.style.height = '100%';
        this.canvas.width = canvas.offsetWidth;
        this.canvas.height = canvas.offsetHeight;
        this.pixelSize = 6;
    }

    setFireObject() {
        this.height = Math.floor(this.canvas.height / this.pixelSize);
        this.width = Math.floor(this.canvas.width / this.pixelSize);

        const arrLen = this.height * this.width;

        this.fire = Fire.new(this.height, this.width, this.palette.length);
        this.fire.update_cells();

        this.cells = new Uint8Array(memory.buffer, this.fire.get_cells(), arrLen);
    }

}

const doom_animation = new DoomAnimation();
window.doom_animation = doom_animation;