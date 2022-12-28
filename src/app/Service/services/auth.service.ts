import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { IUser } from 'src/app/shared/model/user.model';
import { UserLoginDTO } from 'src/app/DTO\'s/UserLoginDTO';
import { IDataResult } from 'src/app/DTO\'s/Utilities/IDataResult';
import { UserTokens } from 'src/app/DTO\'s/UserTokens';


type EntityResponseType = HttpResponse<IUser>;

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private readonly resourceUrl: string = '/User';

    constructor(private router: Router,
        private http: HttpClient,
        private $localStorage: LocalStorageService,
        private $sessionStorage: SessionStorageService) {
        this.resourceUrl = environment.url + this.resourceUrl;
    }



    login(user: UserLoginDTO): Observable<IDataResult<UserTokens>> {
        let loginPath:string="/Login"
        return this.http.post<IDataResult<UserTokens>>(this.resourceUrl+loginPath,user).pipe(map(authenticateSuccess.bind(this)));

        // return this.http
        //     .post<IDataResult<UserTokens>>(`${this.resourceUrl}/Login`, user, { observe: 'response' })
        //     .pipe(map(authenticateSuccess.bind(this)));

        function authenticateSuccess(resp:IDataResult<UserTokens>) {
            
            const jwt = resp.data.token;
        
            if (jwt) {
                this.storeAuthenticationToken(jwt);
                return jwt;
            }
        }
    }

    storeAuthenticationToken(jwt) {
        this.$localStorage.store('authenticationToken', jwt);
    }

    signUp(user: IUser): Observable<EntityResponseType> {
        return this.http
            .post<IUser>(`${this.resourceUrl}/register`, user, { observe: 'response' })
            .pipe(map((res: EntityResponseType) => res));
    }

    getToken() {
        return (
            this.$localStorage.retrieve('authenticationToken') ||
            this.$sessionStorage.retrieve('authenticationToken')
        );
    }

    logout(): Observable<any> {
        return new Observable(observer => {
            if (this.$localStorage.retrieve('authenticationToken')) {
                this.$localStorage.clear('authenticationToken');
            }
            if (this.$sessionStorage.retrieve('authenticationToken')) {
                this.$sessionStorage.clear('authenticationToken');
            }
            this.router.navigate(['/User/Login']);
            observer.complete();
        });
    }

    isAuthenticated() {
        return this.getToken() != null;
    }

    hasAnyAuthority(authorities: string[]): boolean {
        const jwtData = this.getToken();
        if (!jwtData) {
            return false;
        }
        const decodedJwtJsonData = window.atob(jwtData);
        const decodedJwtData = JSON.parse(decodedJwtJsonData);
        const apexRoles = decodedJwtData.apexRole;

        for (let i = 0; i < authorities.length; i++) {
            if (apexRoles.includes(authorities[i])) {
                return true;
            }
        }

        return false;
    }

    activateAccount(activationKey: string) {
        return this.http
            .get<any>(`${this.resourceUrl}/account/activate/` + activationKey, { observe: 'response' }).pipe(
                map(value => value.body)
            );
    }
}
