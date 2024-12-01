export function seal(constructor) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}
