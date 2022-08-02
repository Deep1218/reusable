import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
let app:AppComponent
let fixture:ComponentFixture<AppComponent>;

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
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'reusable'`, () => {
    expect(app.title).toEqual('reusable');
  });

  
  it('processFile',()=>{
   
    const mockFile = new File([''], 'filename.csv', { type: 'text/csv' });
    app.processFile({files:[mockFile]})
    fixture.detectChanges()

    app.onUpload();


  })
  // it('onUpload',()=>{
  //   const mockFile = new File([''], 'filename.csv', { type: 'text/csv' });
  //   app.file = mockFile;
    
  //   app.onUpload()
  //   console.log(app.response)
  //   expect(app.response).toEqual('')
  // })
 
  // it('upload without file',()=>{
  //   app.selectedFile={};
  //   app.onUpload()
  // })
 
});
