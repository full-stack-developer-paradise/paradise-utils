/**
 * Created by mapbar_front on 2019-09-17.
 */
function getSerializeArray (dom) {
    let serializeArray = [];
    let inputs = dom.getElementsByTagName('input');
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].name) {
            let obj = {
                name: inputs[i].name,
                value: inputs[i].value
            };
            serializeArray.push(obj);
        }
    }
    return serializeArray;
}
function getSerialzeObj (dom) {
    let serializeObj = {};
    let inputs = dom.getElementsByTagName('input');
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].name) {
            serializeObj[inputs[i].name] = inputs[i].value;
        }
    }
    return serializeObj;
}

export default {
    getSerializeArray,
    getSerialzeObj
}
