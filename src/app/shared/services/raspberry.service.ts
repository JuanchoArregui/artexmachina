import { BaseApiService } from './base-api.service';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class RaspberryService extends BaseApiService {
  private static readonly BRICKFY_API = `${BaseApiService.BASE_API}/assets`;
  private readonly BRICKFY_LEDSAPI = `${BaseApiService.BASE_API}/raspberry`;

  constructor(private http: Http) {
    super();
  }

  toggleGreenLed(): Observable<Response> {
    return this.http.get(this.BRICKFY_LEDSAPI, BaseApiService.defaultOptions)
      .map((res: Response) => res.json())
      .catch(error => this.handleError(error));
  }
}
