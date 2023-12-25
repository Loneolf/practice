
import Food from './food'
import Score from './score'
import Snake from './snake'

class Contrl {
    snake: Snake
    score: Score
    food: Food
    isLive: boolean = true
    // 是否加速
    isFast: boolean = false
    dirEL: HTMLDivElement
    speedAginEL: HTMLDivElement
    // 初始默认向右走
    direction: string = 'right'
    // 所有控制方向的索引
    dirMap: { [dir: string]: string } = {
        '上': 'up', 'ArrowUp': 'up', 'w': 'up',
        '右': 'right', 'ArrowRight': 'right', 'd': 'right',
        '下': 'down', 'ArrowDown': 'down', 's': 'down',
        '左': 'left', 'ArrowLeft': 'left', 'a': 'left',
    }
    // 防止用户连续快速的切换方向将自己撞死，每次切换方向都加上锁，需要蛇前进一格再打开
    isLockDir: boolean = false

    constructor() {
        this.snake = new Snake()
        this.score = new Score()
        this.food = new Food()
        this.dirEL = document.querySelector('#dirBox')!
        this.dirEL.addEventListener('touchstart', this.clickHandle.bind(this))

        // 复活与加速
        this.speedAginEL = document.querySelector('#speedAgin')!
        this.speedAginEL.addEventListener('touchstart', this.touchHandle.bind(this))
        this.speedAginEL.addEventListener('touchend', this.touchHandle.bind(this))

        // 监听键盘事件，改变方向和复活
        document.addEventListener('keydown', this.keyDownHanle.bind(this))
        document.addEventListener('keyup', this.keyDownHanle.bind(this))
        this.run()
    }

    run() {
        if (!this.isLive) return
        let x = this.snake.X
        let y = this.snake.Y
        switch (this.direction) {
            case 'up':
                y -= 0.1
                break
            case 'right':
                x += 0.1
                break
            case 'down':
                y += 0.1
                break
            case 'left':
                x -= 0.1
                break
            default:
                break;
        }
        try {
            this.isEatFoot()
            this.snake.X = Math.round(x * 10) / 10 // 小数精度问题
            this.snake.Y = Math.round(y * 10) / 10
        } catch (error) {
            this.isLive = false
            // console.log(error)
            alert(error)
        }

        setTimeout(() => {
            this.run()
            if (this.isLockDir) {
                this.isLockDir = false
            }
        }, (300 - this.score.lever * 30)/(this.isFast ? 2 : 1));
    }

    // 判断蛇是否吃到了食物
    isEatFoot() {
        if (this.snake.X === this.food.X && this.snake.Y === this.food.Y) {
            this.food.change(this.snake.snakeAPositin)
            this.snake.addBody()
            this.score.addScore()
        }
    }

    touchHandle(e: TouchEvent) {
        e.preventDefault()
        const inner = (e.target as HTMLDivElement).innerText
        if (inner === '加速') {
            this.isFast = e.type === 'touchstart'
        } else if (inner === '复活' && e.type === 'touchstart') {
            this.again()
        }
    }

    clickHandle(e: TouchEvent) {
        e.preventDefault()
        e.stopPropagation()
        const target = e.target as HTMLDivElement
        if (this.dirMap[target.innerText]) {
            this.setDir(this.dirMap[target.innerText])
        }
    }

    // 处理键盘事件，方向赋值，空格复活，K键加速
    keyDownHanle(e: KeyboardEvent) {
        e.preventDefault()
        if (e.type === 'keyup' && e.key !== 'k') return
        if (e.key === 'k') {
            this.isFast = e.type === 'keydown'
        }
        if (e.code === 'Space') {
            // 空格键复活重新开始
            this.again()
        }
        if (this.dirMap[e.key]) {
            this.setDir(this.dirMap[e.key])
        }
    }

    setDir(dir: string) {
        // 相反方向映射
        const backDir: { [dir: string]: string } = {
            up: 'down',
            down: 'up',
            right: 'left',
            left: 'right'
        }
        if (dir === backDir[this.direction] || this.isLockDir) {
            return
        }
        this.isLockDir = true
        this.direction = dir
    }

    again() {
        if (this.isLive) return
        this.snake.init()
        this.score.init()
        this.isLive = true
        this.direction = 'right'
        this.food.change()
        this.run()
    }

}


export default Contrl