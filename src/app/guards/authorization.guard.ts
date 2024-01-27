import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {AppStateService} from "../app-state.service";

@Injectable({
  providedIn: 'root'
})
export class AuthorizationGuard{
  constructor(private appState: AppStateService,
              private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(this.appState.authState.roles.includes('ADMIN'))
      return true;
    else
      this.router.navigate(['/admin/notAuthorized'])
    return false;
  }
}
