import { Injectable } from '@angular/core';
import { DAO } from '../../shared/classes/dao';
import { Combo } from '../../shared/classes/combo';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CombosService extends DAO<Combo> {
  constructor(httpClient: HttpClient) {
    super(httpClient, "combos", "combo", "Combos");
  }
}
