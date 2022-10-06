import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { MessagingCarousalComponent } from './messaging-carousal.component';

describe('MessagingCarousalComponent', () => {
  let component: MessagingCarousalComponent;
  let mockAuthService: jasmine.SpyObj<any>;
  let router: Router;
  beforeEach(async(() => {
   TestBed.configureTestingModule({
     imports: [
       HttpClientTestingModule,
       BrowserModule,
       RouterTestingModule.withRoutes([]),
     ],
     declarations: [MessagingCarousalComponent],
   }).compileComponents()
 
   let fixture = TestBed.createComponent(MessagingCarousalComponent);
     fixture = TestBed.createComponent(MessagingCarousalComponent);
     component = fixture.componentInstance;
     component.ngOnInit();
   
 }))
  
 it('should create the app', async(() => {
   const fixture = TestBed.createComponent(MessagingCarousalComponent);
   const app = fixture.debugElement.componentInstance;
   expect(app).toBeTruthy();
 }));


});
