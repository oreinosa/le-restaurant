import { environment } from "../../environments/environment";

export const HOST = environment.production ? 'http://localhost:3000/api/v1/' : 'http://localhost:8080/api/v1/';
