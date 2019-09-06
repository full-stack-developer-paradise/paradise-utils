/**
 * Created by mapbar_front on 2019-09-05.
 */
import debounce from './utils/debounce';
import throttle from './utils/throttle';
import pubsub from './utils/pubsub';
import path from './utils/path';

export const Debounce = debounce;


const Utils = {
    debounce,
    throttle,
    pubsub,
    path
};

export default Utils;
