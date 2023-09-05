import { Injectable } from '@angular/core';
import { User } from 'src/interfaces/user';
import { HttpCrudService } from './http-crud.service';

@Injectable()
export class FafaService extends HttpCrudService<User, number> {
protected baseUrl: string = "http://";

  constructor() {
super();
}

}