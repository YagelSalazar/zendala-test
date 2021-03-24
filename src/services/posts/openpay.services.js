import Axios from 'axios';
// import { logError } from '../catch.service';

export const openpayApiVersion = 'v1';
export const openpayId = process.env.REACT_APP_OPENPAY_ID;
export const openpayApi = process.env.REACT_APP_OPENPAY_API;
const openpaySecretKey = process.env.REACT_APP_OPENPAY_SECRET_KEY;

export const openpayAPI = Axios.create({
	baseURL: `${openpayApi}/${openpayApiVersion}/${openpayId}`
});

openpayAPI.interceptors.response.use(undefined, (error) => {
	if (error.response) {
		return Promise.reject(new frontError({ message: error.response.data.error }));
	}
	return Promise.reject(error);
});

openpayAPI.interceptors.request.use(function (config) {
	config.auth = { username: openpaySecretKey, password: '' };
	return config;
}, undefined);

