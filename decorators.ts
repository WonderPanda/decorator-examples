import 'reflect-metadata';

export const myKey = Symbol('myKey');

export function PropertyDecorator(newName: string) {
    return function(target: any, propName: string) {
        const typeMap = Reflect.getMetadata(myKey, Reflect) || new Map([]);

        const typeProps = typeMap.get(target.constructor) || [];

        typeMap.set(target.constructor, typeProps.concat({ newName, propName}));

        Reflect.defineMetadata(myKey, typeMap, Reflect);
    }
}   
export function ClassDecorator(...args: any[]) {
    //console.log(args);
}







export class DependencyContainer {

}