import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Keys } from "../constants/keys";
import { User } from "../models/user";
import { LocalStorageRefService } from "./local-storage-ref.service";

@Injectable({ providedIn: "root" })
export class UserLocalStorageService {
  private _localStorage: Storage;

  private _userData$ = new BehaviorSubject<any>(null);
  userData$ = this._userData$.asObservable();

  constructor(private _localStorageRefService: LocalStorageRefService) {
    this._localStorage = _localStorageRefService.localStorage;
  }

  setInfo(data: User): void {
    const jsonData = JSON.stringify(data);
    this._localStorage.setItem(Keys.USER_DATA, jsonData);
    this._userData$.next(data);
  }

  loadInfo(): void {
    const data = JSON.parse(this._localStorage.getItem(Keys.USER_DATA) || "");
    this._userData$.next(data);
  }
}
