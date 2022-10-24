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
import { AuthService } from './shared/services/auth.service';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TestService } from './shared/services/test.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchService } from './shared/services/search.service';
import { SearchResultsCompnent } from './home/search-page/components/search-results/search-results.component';
import { CircularComponent } from './shared/lib/circular-amount/circular.component';

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
    MenuBottomSheet,
    SearchResultsCompnent,
    CircularComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthService,
    TestService,
    SearchService,
    { provide: LocationStrategy, useClass: PathLocationStrategy },
    // { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
