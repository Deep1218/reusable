import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

let app:AppComponent
let fixture:ComponentFixture<AppComponent>

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BrowserModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule
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

  it ('OnSelectFile', () =>{
    const mockFile = new File([''], 'filename', { type: '  ' });
    const mockEvt = { target: { files: [mockFile] } };
    app.onSelectFile(mockEvt)

    expect(app.file).toEqual(mockEvt.target.files[0])
  })
  it('upload',()=>{
    const mockFile = new File([''], 'filename.csv', { type: '' });
    app.file = mockFile;
    
    app.upload()
  })
 
  it('upload without file',()=>{
    app.upload()
  })

  }
  
  
);
