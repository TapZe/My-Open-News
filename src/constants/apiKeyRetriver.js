const apiKey1 = import.meta.env.VITE_NYT_API_KEY_1;
const apiKey2 = import.meta.env.VITE_NYT_API_KEY_2;
const apiKey3 = import.meta.env.VITE_NYT_API_KEY_3;

const NYT_API_KEYS = [];

if (apiKey1) NYT_API_KEYS.push(apiKey1);
if (apiKey2) NYT_API_KEYS.push(apiKey2);
if (apiKey3) NYT_API_KEYS.push(apiKey3);

export default NYT_API_KEYS;
