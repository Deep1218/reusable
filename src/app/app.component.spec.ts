import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { UploadService } from './Service/upload.service';
let app:AppComponent
let fixture:ComponentFixture<AppComponent>

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
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

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('reusable app is running!');
  });
  it(`should have as title 'Upload'`, () => {
    expect(app.title).toEqual('Upload');
  });
  it('upload',()=>{
    const mockFile = new File([''], 'filename', { type: 'text/pdf' });
    const mockEvt = { target: { files: [mockFile] } };
    app.onSelectFile(mockEvt)

    expect(app.file).toEqual(mockEvt.target.files[0])
    
    app.upload()
  })
 
  it('upload without file',()=>{
    app.upload()
  })
  it ('onSelectFile ', () =>{
    
  }) 
 
  }
  
  
);
