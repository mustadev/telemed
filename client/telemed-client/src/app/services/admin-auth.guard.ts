import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {
  constructor(private router: Router, private authStorage: TokenStorageService) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if ((this.authStorage.getUser() == null) || (this.authStorage.getUserType() !== "ADMIN")){
        alert('You are not allowed to view this page. You are redirected to login Page');
        console.log("next : " + next);
        console.log("state : " + state);
        this.router.navigate(["admin/login"],{ queryParams: { retUrl: state.url} });
            return false;
      }
    return true;
  }
}
