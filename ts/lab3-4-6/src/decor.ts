﻿export function seal(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

