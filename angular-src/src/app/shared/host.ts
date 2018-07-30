import { isDevMode } from '@angular/core';

export const HOST = isDevMode() ? 'http://localhost:3000/api/v1/' : 'http://localhost:8080/api/v1/';
