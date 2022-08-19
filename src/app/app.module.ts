import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SplashScreen } from './splashscreen/splashscreen.component';
import { AuthCompnent } from './auth/auth.component';
import { HomeCompnent } from './home/home.component';
import { NavigationCompnent } from './shared/lib/navigation/navigation.component';
import { SearchCompnent } from './shared/lib/search/search.component';
import { SearchPageCompnent } from './home/search-page/search-page.component';
import { ProfilePageCompnent } from './home/profile-page/profile-page.component';
import { LinksPageCompnent } from './home/links-page/links-page.component';
import { NavHeaderCompnent } from './shared/lib/nav-header/nav-header.component';
import { BottomSheetLogout } from './home/profile-page/bottom-sheet';
import { MaterialModule } from './material.module';
import { MenuBottomSheet } from './shared/lib/nav-header/menu-bottom-sheet';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    SplashScreen,
    AuthCompnent,
    HomeCompnent,
    NavigationCompnent,
    SearchCompnent,
    SearchPageCompnent,
    ProfilePageCompnent,
    LinksPageCompnent,
    NavHeaderCompnent,
    BottomSheetLogout,
    MenuBottomSheet
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [
    { provide: LocationStrategy, useClass: PathLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
