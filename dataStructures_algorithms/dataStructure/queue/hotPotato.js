import Queue from './queue.js'


// 击鼓传花游戏

export function hotPotato(nameList, num) {
    let queue = new Queue()
    for(let i = 0; i < nameList.length; i++) {
        queue.enqueue(nameList[i])
    }
    let moved = ''
    while(queue.size() > 1) {
        for(let i = 0; i < num; i++) {
            queue.enqueue(queue.dequeue())
        }
        moved += queue.dequeue() + ' '
    }
    return {
        winer: queue.peek(),
        moved
    }
}