import UserDetails  from 'src/app/models/user-details.model';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable, of } from 'rxjs';
import TransactionModel from 'src/app/models/transaction.model';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {



  readonly baseURL:string = "http://localhost:8000/api";  
  readonly transactionURL:string = "http://localhost:8000/api/data_storage/transactions/";  
  readonly reportURL:string = "http://localhost:8000/api/data_storage/report/";  

  constructor(
    private http: HttpClient
  ) { }

    getAuthDetails() : Observable<any> {
      return this.http.get<any>("https://dev-2rwayylz.us.auth0.com/userinfo")
    };

    getUserDetails(email:string) : Observable<any> {
      return this.http.get<any>(this.baseURL + '/data_storage/'+email);
    }

    getUserStats(email:string) : Observable<any> {
      return this.http.get<any>(this.baseURL + '/data_storage/'+email+'/stats');
    }

    postUserDetails(userDetails: UserDetails) : Observable<any> {
      return this.http.post<any>(this.baseURL + '/data_storage/user', userDetails);
    }

    updateUserDetails(email: string, userDetails: UserDetails) : Observable<any> {
      return this.http.put<any>(this.baseURL + '/user_details/' + email, userDetails);
    }

    getCategories(userId: number, type: string, startDate: string, endDate: string) : Observable<any> {
      let params = {startDate: startDate, endDate: endDate, type: type};
      return this.http.get<any>(this.baseURL + '/data_storage/category/'+userId+'/'+type, {params: params});
    }

    getCategoryStats(categoryId: number, startDate: string, endDate: string) : Observable<any> {
      let params = {startDate: startDate, endDate: endDate};
      return this.http.get<any>(this.baseURL + '/data_storage/category/'+categoryId+'/stats', {params: params});
    }


    postTransaction(userId: number, transactionDTO: TransactionModel) : Observable<any> {
      return this.http.post<any>(this.transactionURL + userId, transactionDTO);
    }
    deleteTransaction(transactionDTO: TransactionModel) {
      return this.http.delete<any>(this.transactionURL + transactionDTO.id);
    }

    getUserBalance(userId: number, startDate: string, endDate: string) : Observable<any> {
      let params = {startDate: startDate, endDate: endDate};
      return this.http.get<any>(this.reportURL +userId+'/balance', {params: params});
    }

    getCategoryStatsByType(userId: number, startDate: string, endDate: string, type: string) : Observable<any> {
      let params = {startDate: startDate, endDate: endDate, type: type};
      return this.http.get<any>(this.reportURL +userId+'/category_stats_by_type', {params: params});
    }


}
