/**
 * Created by mapbar_front on 2019-09-05.
 */
import debounce from './utils/debounce';
import throttle from './utils/throttle';
import pubsub from './utils/pubsub';
import path from './utils/path';
import form from './utils/form';

export const Debounce = debounce;
export const Throttle = throttle;
export const PubSub = pubsub;
export const Path = path;
export const Form = form;


const Utils = {
    debounce: Debounce,
    throttle: Throttle,
    pubsub: PubSub,
    path: Path,
    form: Form
};

export default Utils;
