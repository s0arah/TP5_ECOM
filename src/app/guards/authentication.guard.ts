import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {AppStateService} from "../app-state.service";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard{
  constructor(private appState: AppStateService) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return (this.appState.authState.isLoggedIn==true);
  }
}
