// 单例模式

class Legao {
    static instance

    static getInstance() {
        if(!this.instance) {
            this.instance = new Legao();
        }
        return this.instance;
    }
}

const legao1 = Legao.getInstance();
const legao2 = Legao.getInstance();

console.log(legao1 === legao2);
