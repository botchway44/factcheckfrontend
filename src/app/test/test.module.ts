import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestService } from '../shared/services/test.service';
import { TestComponent } from './app.component';
import { TestRoutingModule } from './test-routing.module';



@NgModule({
  declarations: [TestComponent],
  imports: [
    TestRoutingModule,
    CommonModule
  ],
  providers: [TestService],
  bootstrap: [TestComponent]
})
export class TestModule { }
