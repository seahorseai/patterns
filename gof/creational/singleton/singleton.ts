class Singleton {

private static instance: Singleton;
private constructor() { }


public static getUniqueInstance(): Singleton {
    if (!Singleton.instance) {
        Singleton.instance = new Singleton();
    }
    return Singleton.instance;
}
}


function ckechIfVariablesContainTheSameInstance() {

const s1 = Singleton.getUniqueInstance();
const s2 = Singleton.getUniqueInstance();

if (s1 === s2) {
    console.log('Singleton works, both variables contain the same instance.');
} else {
    console.log('Singleton failed, variables contain different instances.');
}
}

ckechIfVariablesContainTheSameInstance();




