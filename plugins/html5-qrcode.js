// plugins/html5-qrcode.js
import { Html5Qrcode } from 'html5-qrcode';

export default (context, inject) => {
    inject('html5qrcode', Html5Qrcode);
};