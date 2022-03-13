const number = 10;
import {TYPE_LOG} from '../types.js';
function logger(log, type=TYPE_LOG) {
    console[type](log);
}   

export default {number, logger};

