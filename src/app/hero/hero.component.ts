import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {

  constructor(private translate: TranslateService) { }
  onOpenGithub(): void {
    window.open('https://github.com/gokhanelek', '_blank');
  }
}
