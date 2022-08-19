import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOneComponent } from './list-one.component';

describe('ListOneComponent', () => {
  let component: ListOneComponent;
  let fixture: ComponentFixture<ListOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListOneComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOneComponent);
    component = fixture.componentInstance;
    component.data = {
      id: 1,
      imgUrl: 'assets/img/sample-img.jpg',
      title: 'Oranges',
      line1: '50 / Kg',
      line2: 'Farm picked fresh oranges.',
    };
  });

  it("should create and call 'setProperties' method", () => {
    const mockSetProperties = spyOn(component, 'setProperties');
    fixture.detectChanges();
    expect(mockSetProperties).toHaveBeenCalled();
    expect(component).toBeTruthy();
  });

  it("should set 'img', 'title', 'line1, and 'line2'", () => {
    component.setProperties();
    fixture.detectChanges();
    if (
      component.data.imgUrl &&
      (component.data.title || component.data.name) &&
      component.data.line1 &&
      component.data.line2
    ) {
      expect(component.img).toBeTrue();
      expect(component.title).toBeTrue();
      expect(component.line1).toBeTrue();
      expect(component.line2).toBeTrue();
    } else {
      expect(component.img).toBeFalse();
      expect(component.title).toBeFalse();
      expect(component.line1).toBeFalse();
      expect(component.line2).toBeFalse();
    }
  });

  it("should set 'title' when 'name' key in the ListData interface", () => {
    component.data = {
      id: 1,
      imgUrl: 'assets/img/sample-img.jpg',
      name: 'Oranges',
      line1: '50 / Kg',
      line2: 'Farm picked fresh oranges.',
    };
    component.setProperties();
    fixture.detectChanges();
    if (component.data.title || component.data.name) {
      expect(component.title).toBeTrue();
    } else {
      expect(component.title).toBeFalse();
    }
  });
});
