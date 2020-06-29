import { Component, OnInit } from '@angular/core';
import { AuthenticationsService } from '../../services/authentications/authentications.service';
import { ToolsService } from 'src/app/services/tools/tools.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(
    public authService: AuthenticationsService,
    public toolsService: ToolsService,
  ) { }

  ngOnInit() {}

  public goToCart(){
    this.toolsService.goToPage('/shopping-cart/');
  }

}
