// 工厂模式
class Login {
    constructor(appName, adminList, option) {
        this.appName = appName;
        this.adminList = adminList;
        if (option) {
            const { whiteList } = option;
            this.adminList = this.adminList.concat(whiteList);
        }
    }
}

const loginAuth = (option) => {
    const appName = 'vacation';
    const adminList = [{name: 'admin', pwd: 'admin'}];
    return new Login(appName, adminList, option);
}

const system1 = loginAuth();
const system2 = loginAuth({whiteList:[{name: 'fxj', pwd: 'hecker'}]});

console.log(system1, 'system1');
console.log(system2, 'system2');
