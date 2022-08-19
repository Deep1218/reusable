import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    app.data = [
      {
        id: 1,
        imgUrl: 'assets/img/sample-img.jpg',
        title: 'Oranges',
        line1: '50 / Kg',
        line2: 'Farm picked fresh oranges.',
      },
      {
        id: 2,
        imgUrl: 'assets/img/sample-img2.jpg',
        title: 'Banana',
        line1: '40 / Kg',
        line2: 'Farm picked fresh banana.',
      },
    ];
  });
  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it("should call 'onClick' method", () => {
    let mockOnClick = spyOn(app, 'onClick');
    app.onClick(1);
    expect(mockOnClick).toHaveBeenCalled();
  });

  it("should call 'sortAscendingTitle' method", () => {
    app.onClick(1);
    expect(app.data[0].id).toEqual(2);
  });

  it("should call 'sortDescendingTitle' method", () => {
    app.onClick(2);
    expect(app.data[0].id).toEqual(1);
  });

  it("should call 'sortAscendingNumber' method", () => {
    app.onClick(3);
    expect(app.data[0].id).toEqual(1);
  });

  it("should call 'sortDescendingNumber' method", () => {
    app.onClick(4);
    expect(app.data[0].id).toEqual(2);
  });
});
