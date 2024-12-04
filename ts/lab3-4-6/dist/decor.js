export function seal(constructor) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}
export function upper(target, method, descriptor) {
    let originalMethod = descriptor.value;
    descriptor.value = function () {
        let returnValue = originalMethod();
        return returnValue.upper();
    };
}
