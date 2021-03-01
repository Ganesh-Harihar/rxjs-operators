import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { UiStyleToggleService } from 'src/app/services/ui-style-toggle.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  constructor(private uiStyleToggleService: UiStyleToggleService) { }

  toggleTheme() {
    this.uiStyleToggleService.toggle();
  }

  ngOnInit(): void {
    this.uiStyleToggleService.setThemeOnStart();
    fromEvent(document, 'click').subscribe((res: any) => {
      if (res.target != document.getElementById('collapse-btn')) {
        document.getElementById('navbarSupportedContent')?.classList.remove('show');
      }
    })
  }

}
