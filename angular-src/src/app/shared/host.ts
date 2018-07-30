import { environment } from './../../environments/environment';

export const HOST = environment.production ? 'https://thenewfuturesv.com/api/v1' : 'http://localhost:8080/api/v1/';
