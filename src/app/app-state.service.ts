import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {

  public productState: any = {
    products: [],
    keyword: '',
    totalPages: 0,
    currentPage: 1,
    pageSize: 3,
    totalProducts: 0,
    status: '',
    errorMessage: ''
  }

  public authState: any = {
    username: undefined,
    isLoggedIn: false,
    roles: undefined,
    token: undefined,
  }
  constructor() { }

  public setProductState(productState: any) {
    this.productState = {...productState, productState};
  }

  public setAuthState(authState: any) {
    this.authState = {...authState, authState};
  }
}
