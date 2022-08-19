import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { InstagramLayoutComponent } from './instagram-layout.component';


describe('InstagramLayoutComponent', () => {
  let component: InstagramLayoutComponent;
  let fixture: ComponentFixture<InstagramLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstagramLayoutComponent ],
      imports: [ReactiveFormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstagramLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
