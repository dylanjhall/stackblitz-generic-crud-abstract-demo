import { Injectable } from '@angular/core';
import { User } from 'src/interfaces/user';
import { HttpCrudService } from 'src/services/http-crud.service';


@Injectable()
export class UserService extends HttpCrudService<User, number,any>{
protected baseUrl!: string;

  constructor() {
    super();
}

}