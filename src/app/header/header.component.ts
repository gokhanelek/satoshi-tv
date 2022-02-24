import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { User } from '../@core/models/user';
import { UserLocalStorageService } from '../@core/services/user-local-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user$ = new Observable<User>();

  constructor(
    private translate: TranslateService,
    private localstorageService: UserLocalStorageService
  ) { }

  ngOnInit(): void {
    this.user$ = this.localstorageService.userData$
  }
}
