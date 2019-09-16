/**
 * Created by mapbar_front on 2019-09-05.
 */
export default function throttle (func, wait) {
    let timer = null;
    let previous;
    return function () {
        if (!previous) {
            previous = new Date().getTime();
        }
        let remaining = wait - (new Date().getTime() - previous);
        let rest = Array.prototype.slice.call(arguments);

        if (remaining >= 0) {
            if (timer) clearTimeout(timer);
        } else {
            timer = setTimeout(() => {
                func.call(this, rest);
                previous = new Date().getTime();
            }, remaining);
        }
    }
}
