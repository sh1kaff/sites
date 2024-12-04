export function seal(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

export function upper(target: Object, method: string, descriptor: PropertyDescriptor) {
    let originalMethod = descriptor.value;
    descriptor.value = function() {
        let returnValue = originalMethod();
        return returnValue.upper();
    };
}