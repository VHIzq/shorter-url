import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { UrlShorterComponent } from './url-shorter/url-shorter.component';
import { InfoCardComponent } from './info-card/info-card.component';
import { MenuComponent } from './menu/menu.component';
import { HeroComponent } from './hero/hero.component';



@NgModule({
  declarations: [
    HeaderComponent,
    UrlShorterComponent,
    InfoCardComponent,
    MenuComponent,
    HeroComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    UrlShorterComponent,
    InfoCardComponent,
    MenuComponent,
    HeroComponent
  ]
})
export class ComponentsModule { }
