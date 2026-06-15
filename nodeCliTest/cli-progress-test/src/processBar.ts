import ansiEscapes from 'ansi-escapes';
// 引入系统换行符，兼容windows(\r\n)和linux/mac(\n)
import { EOL } from 'os';

const write = process.stdout.write.bind(process.stdout);

export class ProgressBar {
    total: number = 0;
    value: number = 0;

    constructor() {}
    /**
     * 初始化并启动进度条
     * @param total 总目标值
     * @param initVlaue 初始已完成值
    */
    start(total: number, initVlaue: number) {
        this.total = total;
        this.value = initVlaue;

        write(ansiEscapes.cursorHide)
        write(ansiEscapes.cursorSavePosition)

        this.render()
    }
    /**
     * 渲染进度条
     */
    render() {
        let progress = this.value / this.total;

        if(progress < 0) {
            progress = 0;
        } else if(progress > 1) {
            progress = 1;
            this.value = this.total;
        }

        const barSize = 40;

        const completeSize = Math.floor(progress * barSize);
        const incompleteSize = barSize - completeSize;

        write(ansiEscapes.cursorRestorePosition)

        write('█'.repeat(completeSize));
        write('░'.repeat(incompleteSize));
        write(` ${this.value} / ${this.total}`)

    }

    update(value: number) {
        this.value = value;

        this.render();
    }

    getTotalSize() {
        return this.total;
    }

    stop() {
        write(ansiEscapes.cursorShow)
        write(EOL)
    }

}