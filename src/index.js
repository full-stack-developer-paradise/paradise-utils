/**
 * Created by mapbar_front on 2019-09-05.
 */
import debounce from './utils/debounce';
import throttle from './utils/throttle';
import pubsub from './utils/pubsub';
import path from './utils/path';

export const Debounce = debounce;
export const Throttle = throttle;
export const PubSub = pubsub;
export const Path = path;


const Utils = {
    debounce: Debounce,
    throttle: Throttle,
    pubsub: PubSub,
    path: Path
};

export default Utils;
