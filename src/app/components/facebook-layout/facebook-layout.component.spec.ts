import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule} from '@angular/forms';
import { FacebookLayoutComponent } from './facebook-layout.component';
describe('FeedCardComponent', () => {
  let component: FacebookLayoutComponent;
  let fixture: ComponentFixture<FacebookLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacebookLayoutComponent ],
      imports: [ReactiveFormsModule]
    })
    .compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(FacebookLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
 
});
