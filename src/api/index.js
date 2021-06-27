import axios from 'axios';
import { API_URL } from '../config';

export default class API {
	static init() {
		const api = axios.create({ baseURL: API_URL });
		this.api = api;
	}
}
