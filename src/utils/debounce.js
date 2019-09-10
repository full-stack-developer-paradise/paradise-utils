/**
 * Created by mapbar_front on 2019-09-05.
 */
function restArguments(func, startIndex) {
    startIndex = startIndex == null ? func.length - 1 : +startIndex;
    return function() {
        var length = Math.max(arguments.length - startIndex, 0),
            rest = Array(length),
            index = 0;
        for (; index < length; index++) {
            rest[index] = arguments[index + startIndex];
        }
        switch (startIndex) {
            case 0: return func.call(this, rest);
            case 1: return func.call(this, arguments[0], rest);
            case 2: return func.call(this, arguments[0], arguments[1], rest);
        }
        var args = Array(startIndex + 1);
        for (index = 0; index < startIndex; index++) {
            args[index] = arguments[index];
        }
        args[startIndex] = rest;
        return func.apply(this, args);
    };
};
// debounce：是在最后执行一次。
export default function debounce(func, wait, immediate) {
    let timer = 0, result;

    const debounced = function (args) {
        if (timer) clearTimeout(timer);
        let rest = Array.prototype.slice.call(args);
        if (immediate) {
            var callnow = !timer;
            timer = setTimeout(() => {
                func.call(this, rest)
            }, wait);
            if (callnow) {
                result = func.call(this, rest)
            }
        } else {
            timer = setTimeout(() => {
                func.call(this, rest)
            }, wait);
        }
        return result;
    };
    debounced.cancel = function () {
        clearTimeout(timer)
    };
    return debounced;
}
