import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SplashScreen } from './splashscreen/splashscreen.component';
import { AuthCompnent } from './auth/auth.component';
import { HomeCompnent } from './home/home.component';
import { AuthCallbackCompnent } from './auth-callback/auth-callback.component';


const routes: Routes = [
  { path: "", component: SplashScreen },
  { path: "auth", component: AuthCompnent },
  { path: "home", component: HomeCompnent },
  { path: "callback", component: AuthCallbackCompnent },
  { path: 'test', loadChildren: () => import('./test/test.module').then(m => m.TestModule) },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
