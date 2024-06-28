//DESARROLLO
/* const URLBase = "192.168.0.9"; */
const URLBase = "192.168.100.39";
/* const URL_SSE = "192.168.0.8"; */

const SERVER_URL = `http://${URLBase}/interbarge-namandu/ws-chat/api`;

const FOTOS_URL = "http://192.168.100.215:9000/api-sse?q=mensajes-dm&token=3ccc968dd4293914413f1ab735799ee27924a93ed7b966fd1aca855c8bf53fd1&limit=10";

/* const SERVER_MENSAJES = `http://${URL_SSE}:9000/api-sse.php`; */
const SERVER_MENSAJES = `http://${URLBase}/interbarge-namandu/ws-chat/funciones/mensajes`; 

const SERVER_GRUPOS = `http://${URLBase}/interbarge-namandu/ws-chat/funciones/mensajes`;

/* PRODUCCION */
/* const SERVER_URL = "https://interbarge.namandu.com/admin_estados/ws/api"; */

export default [SERVER_URL, FOTOS_URL, SERVER_MENSAJES, SERVER_GRUPOS, URLBase];
//export default SERVER_URL;