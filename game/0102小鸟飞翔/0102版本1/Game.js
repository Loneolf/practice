let imgData=(function () {
    return [
        {
            "filename": "0",
            "frame": {"x":400,"y":78,"w":28,"h":39}
        },
        {
            "filename": "0",
            "frame": {"x":368,"y":140,"w":28,"h":39}
        },
        {
            "filename": "1",
            "frame": {"x":368,"y":181,"w":28,"h":39}
        },
        {
            "filename": "2",
            "frame": {"x":400,"y":119,"w":28,"h":39}
        },
        {
            "filename": "3",
            "frame": {"x":398,"y":160,"w":28,"h":39}
        },
        {
            "filename": "4",
            "frame": {"x":398,"y":201,"w":28,"h":39}
        },
        {
            "filename": "5",
            "frame": {"x":428,"y":160,"w":28,"h":39}
        },
        {
            "filename": "6",
            "frame": {"x":428,"y":201,"w":28,"h":39}
        },
        {
            "filename": "7",
            "frame": {"x":430,"y":78,"w":28,"h":39}
        },
        {
            "filename": "8",
            "frame": {"x":430,"y":119,"w":28,"h":39}
        },
        {
            "filename": "9",
            "frame": {"x":460,"y":75,"w":28,"h":39}
        },
        {
            "filename": "banner",
            "frame": {"x":1,"y":217,"w":343,"h":14}
        },
        {
            "filename": "bird0",
            "frame": {"x":460,"y":147,"w":40,"h":26}
        },
        {
            "filename": "bird1",
            "frame": {"x":458,"y":175,"w":40,"h":26}
        },
        {
            "filename": "down_bird0",
            "frame": {"x":326,"y":140,"w":40,"h":30}
        },
        {
            "filename": "down_bird1",
            "frame": {"x":457,"y":43,"w":39,"h":30}
        },
        {
            "filename": "down_mod",
            "frame": {"x":370,"y":74,"w":59,"h":2}
        },
        {
            "filename": "down_pipe",
            "frame": {"x":272,"y":78,"w":62,"h":60}
        },
        {
            "filename": "game_over",
            "frame": {"x":272,"y":1,"w":221,"h":40}
        },
        {
            "filename": "head",
            "frame": {"x":1,"y":138,"w":236,"h":77}
        },
        {
            "filename": "message",
            "frame": {"x":1,"y":1,"w":269,"h":135}
        },
        {
            "filename": "ok",
            "frame": {"x":272,"y":43,"w":96,"h":33}
        },
        {
            "filename": "score",
            "frame": {"x":370,"y":43,"w":85,"h":29}
        },
        {
            "filename": "start",
            "frame": {"x":239,"y":140,"w":85,"h":29}
        },
        {
            "filename": "submit",
            "frame": {"x":239,"y":171,"w":85,"h":29}
        },
        {
            "filename": "up_bird0",
            "frame": {"x":326,"y":172,"w":40,"h":29}
        },
        {
            "filename": "up_bird1",
            "frame": {"x":460,"y":116,"w":40,"h":29}
        },
        {
            "filename": "up_mod",
            "frame": {"x":1,"y":233,"w":59,"h":3}
        },
        {
            "filename": "up_pipe",
            "frame": {"x":336,"y":78,"w":62,"h":60}
        }]
})();

class RES{
    static getImg(imgName){
        let imgDiv=document.createElement("div");
       let itemData=imgData.filter(function (item) {
           return item.filename===imgName
        })[0];
        imgDiv.className=itemData.filename;
        Object.assign(imgDiv.style,{
            width:itemData.frame.w+"px",
            height:itemData.frame.h+"px",
            backgroundImage:`url(img/bird.png)`,
            backgroundPositionX:-itemData.frame.x+"px",
            backgroundPositionY:-itemData.frame.y+"px",
            position:"absolute"
        });
        return imgDiv;
    }
    static changeImg(elem,name){
        let itemData=imgData.filter(function (item) {
            return item.filename===name
        })[0];
        elem.className=itemData.filename;
        Object.assign(elem.style,{
            width:itemData.frame.w+"px",
            height:itemData.frame.h+"px",
            backgroundImage:`url(img/bird.png)`,
            backgroundPositionX:-itemData.frame.x+"px",
            backgroundPositionY:-itemData.frame.y+"px",
            position:"absolute"
        });
    }
}
/*
*  小鸟类
*  1、设置状态
*  2、修改状态
*  3、创建小鸟
*  4、更新---小鸟飞
*  5、小鸟飞
*
*
*
* */
class Bird{
    /*
    * 当写constructor时，这就是构造函数
    * 这个函数，当时用new时，自动执行（new Bird()）就会执行这个函数
    * 1、三种状态：默认状态，up状态，down状态
    * 2、初始化为默认状态
    * 3、设置三个数组，分别存放不同的状态调用的图片列表
    * 4、设置num为当前需要调用的数组中对应的项
    * 5、设置间隔时间time=10；
    * 6、创建小鸟
    *
    * */
    constructor(parent){
        Bird.NORMAL_STATUS="normal_status";
        Bird.UP_STATUS="up_status";
        Bird.DOWN_STATUS="down_status";
        this.status=Bird.NORMAL_STATUS;
        this.normalList=["bird0","bird1"];
        this.upList=["up_bird0","up_bird1"];
        this.downList=["down_bird0","down_bird1"];
        this.num=0;
        this.time=10;
        this.createBird(parent);
    }
    /*
    *  修改状态，如果修改状态后，
    *  设置当前的状态为指定状态
    *  设置当前调用图片的序列项回到第0项
    *
    * */
    changeStatus(_status){
        this.status=_status;
        this.num=0;
    }
    /*
    *  创建小鸟
    *  这里的小鸟每个对象仅允许创建一次
    *  将小鸟放在父容器中
    *
    * */
    createBird(parent){
        if(!this.bird){
            this.bird=RES.getImg("bird0");
        }
        parent.appendChild(this.bird);
        return this.bird;
    }
    /*
    * 每次更新时，执行birdFly这个函数
    *
    * */
    update(){
        this.birdFly();
    }
    /*
    * 每次都会执行birdFly
    * 1、修改间隔执行次数
    * 2、设置num增加
    * 3、根据当前状态是第几个，调用不同图片序列，如果num超出了就回到0
    * 4、根据图片名称，修改当前小鸟的图片背景
    * */
    birdFly(){
        this.time--;
        if(this.time>0)return;
        this.time=10;
        this.num++;
        let name="";
        switch (this.status){
            case Bird.NORMAL_STATUS:
                if(this.num>this.normalList.length-1) this.num=0;
                name=this.normalList[this.num];
                break;
            case Bird.UP_STATUS:
                if(this.num>this.upList.length-1) this.num=0;
                name=this.upList[this.num];
                break;
            case Bird.DOWN_STATUS:
                if(this.num>this.downList.length-1) this.num=0;
                name=this.downList[this.num];
                break;
        }
        RES.changeImg(this.bird,name);
    }
}


class GameStart{
    constructor(){
        this.view=null;
    }
    /*
    *  单例模式
    *  有时候我们处理的内容需要是一个对象，并且这个对象有相关联的方法
    *  而我们不希望大量使用静态方法时，就可以使用单例模式将当前的这个
    *  对象唯一化，然后仅处理当前对象，就可以实现类似于静态方法的特征
    *  单例后，代码中的动态方法可以使用this
    * */
   static getInstance(){
        if(!GameStart.instance){
            GameStart.instance=new GameStart();
        }
        return GameStart.instance;
    }
    createGameStart(){
       let div=document.createElement("div");
       let head=RES.getImg("head");
        div.appendChild(head);
        Object.assign(head.style,{
            top:"100px",
           left:"65px"
        });
        this.bird=new Bird(div);
        // this.bird.changeStatus(Bird.DOWN_STATUS)
       return div;
    }
    add(){
        if(!this.view){
            this.view=this.createGameStart();
        }
        Game.gameView.appendChild(this.view);
    }
    remove(){
        this.view.remove();
    }
    update(){
        //如果gameStart对应这个显示div的父容器不存在，就不在更新这个容器中的所有内容
        if(!this.view.parentElement)return;

        if(this.bird){
            this.bird.update();
        }
    }
}

class GameRun{
    static getInstance(){
        if(!GameRun.instance){
            GameRun.instance=new GameRun();
        }
        return GameRun.instance;
    }
    add(){

    }
    remove(){

    }
}
class GameOver{
    static getInstance(){
        if(!GameOver.instance){
            GameOver.instance=new GameOver();
        }
        return GameOver.instance;
    }
    add(){

    }
    remove(){

    }
}
/*
*   静态方法和动态方法
*   静态方法通常仅对于类起作用
*   动态方法对于new出对象起作用
*
*   静态一般作用为仅对于创建一次元素，或者仅按照对应数据执行一次内容，
*   不产生相关联数据的信息，并且不保存时，使用静态方法。静态方法不需要
*   实例对象（不需要new），因此该方法也会常驻内存中，不能使用this
*
*
*
*   动态方法，需要创建多个相类似的对象，并且各自有不同的数据，通过同样的
*   方法处理不同的对象内容，必须建立在实例的对象的基础上才能够使用动态方法
*   因此要想使用必须创建对象（需要new）
*
* */
class Game{
    static init(){
        Game.GAME_START="game_Start";
        Game.GAME_RUN="game_Run";
        Game.GAME_OVER="game_over";
        Game.gameView=Game.getGameView(document.body);
        Game.gameStatus(Game.GAME_START);
        Game.animation();
    }
    static getGameView(parent){
       let div=document.createElement("div");
       Object.assign(div.style,{
           width:"343px",
           height:"480px",
           margin:"auto",
           backgroundImage:"url(img/bg.jpg)",
           position:"relative"
       });
        parent.appendChild(div);
       return div;
    }
    static gameStatus(status){
        switch (status){
            case Game.GAME_START:
                GameStart.getInstance().add();
                break;
            case Game.GAME_RUN:
                break;
            case Game.GAME_OVER:
                break;
        }
    }
    static animation(){
        requestAnimationFrame(Game.animation);
        GameStart.getInstance().update();
    }
}