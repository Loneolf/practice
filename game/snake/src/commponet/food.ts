import * as util from '@u/util'
import { IPositionA } from './snake'

class Food {

    foodEl: HTMLDivElement;

    constructor() {
        this.foodEl = document.querySelector('#food')!
        this.change()
    }

    get X(): number {
        return util.getRealrem(this.foodEl.offsetLeft)
    }

    get Y(): number {
        return util.getRealrem(this.foodEl.offsetTop)
    }

    // 食物不能更改在蛇身上，需要传递过来蛇的坐标，不传的话默认不在蛇的初始位置
    change(postion?: IPositionA[]) {
        let x = Math.floor(Math.random() * 30) / 10 
        let y = Math.floor(Math.random() * 30) / 10 
        if (this.X === x && this.Y === y || (!postion && x === 0 && y === 0)) {
            this.change()
            return
        } 
        const hasSome = postion?.some((item => {
            return item.x === x && item.y === y
        }))
        if (hasSome) {
            this.change()
            return
        }
        this.foodEl.style.left = x + 'rem'
        this.foodEl.style.top = y + 'rem'
    }

}

export default Food