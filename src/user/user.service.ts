import { Injectable } from '@angular/core';
import { Users } from 'src/interfaces/users';

import { HttpCrudService } from 'src/services/http-crud.service';

@Injectable({
  providedIn: 'root',
})
export class UserService extends HttpCrudService<Users, number> {
  protected baseUrl: string = 'https://jsonplaceholder.typicode.com/users';

  constructor() {
    super();
  }
}
