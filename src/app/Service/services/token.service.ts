import {Injectable} from '@angular/core';
import {LocalStorageService, SessionStorageService} from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  constructor(
    private $localStorage: LocalStorageService,
    private $sessionStorage: SessionStorageService,
  ) {
  }

  getPayload() {

    const token = this.$sessionStorage.retrieve('authenticationToken')
      || this.$localStorage.retrieve('authenticationToken');
    let payload;
    if (token) {
      payload = this.parseJwt(token);
    }
    return payload ? payload.data : null;
  }

  parseJwt(token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
  };

  getUserId() {

    const token = this.$sessionStorage.retrieve('authenticationToken')
      || this.$localStorage.retrieve('authenticationToken');
    let payload;
    if (token) {
      payload = token.split('.')[1];
      payload = JSON.parse(atob(payload));
    }
    return payload ? payload.userId : null;
  }
}
