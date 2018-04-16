import 'reflect-metadata';

import { PropertyDecorator, ClassDecorator, myKey } from './decorators';

const hobbiesMap = new Map<string, string[]>();

// hobbiesMap.set('jesse', ['typescript', 'beer']);
// hobbiesMap.set('james', ['beer', 'shrek']);

// hobbiesMap.get('james') /* ? */

class DecoratedClass {
    @PropertyDecorator('my_prop') public myProp: string;
    @PropertyDecorator('JamesIsAwesome') public secondProp: string;

    constructor() {
        this.myProp = 'this is the value of my prop';
        this.secondProp = 'another string in here';
    }
}

class SecondDecorated {
    @PropertyDecorator('shrekIsLife') public shrekIsLove: string;

    constructor() {
        this.shrekIsLove = 'this is the value of my prop';
    }
}

let instance = new SecondDecorated();
//instance;

function serialize(instance: any, ctor: Function) {
    const typeMap = Reflect.getMetadata(myKey, Reflect) || new Map([]); 

    const typeProps: {newName: string, propName: string}[] = typeMap.get(ctor) || []; /* ? */
    const serialized: any = {};

    typeProps.forEach(x => {
        serialized[x.newName] = instance[x.propName];
    });

    return serialized;
}

let serialized = serialize(instance, SecondDecorated);
serialized;
