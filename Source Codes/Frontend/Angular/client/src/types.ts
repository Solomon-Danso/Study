import { HttpContext, HttpHeaders, HttpParams } from "@angular/common/http";

export interface Options {
  headers?: HttpHeaders | { [header: string]: string | string[] };
  observe?: 'body';
  context?: HttpContext;
  params?: HttpParams | { [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean> };
  reportProgress?: boolean;
  responseType?: 'json';
  withCredentials?: boolean;
  transferCache?: boolean;
}


export interface Products{
items:Product[];
total:number;
page:number;
perPage:number;
totalPages:number;
}


export interface Product{
  id:number;
  name:string;
  price:string;
  description:string;
  image:string;
  quantity:number;
  rating:number;
  category:string;
  createdAt:string;
  updatedAt:string;
  deletedAt:string;
}


export interface PaginationParams{
  [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>
    page:number;
  perPage:number;

}




