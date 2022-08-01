import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
let app:AppComponent

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'reusable'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('reusable');
  });

  
  it('processFile',()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
   
    const mockFile = new File([''], 'filename.csv', { type: 'text/csv' });
    app.processFile({files:[mockFile]})

  })
  it('onUpload',()=>{
    const mockFile = new File([''], 'filename.csv', { type: 'text/csv' });
    app.file = mockFile;
    
    app.onUpload()
  })
 
  it('upload without file',()=>{
    app.onUpload()
  })
 
});
