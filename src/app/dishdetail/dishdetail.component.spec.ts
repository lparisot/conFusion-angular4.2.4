import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormBuilder } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, ActivatedRoute, Router, Params } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { MaterialModule } from '../material/material.module';
import { DishdetailComponent } from './dishdetail.component';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';
import { DishService } from '../services/dish.service';
import { baseURL } from '../shared/baseurl';

class MockRouter {
  navigate = jasmine.createSpy('navigate');
}

class MockActivatedRoute extends ActivatedRoute {
  params: Observable<Params>;

  constructor(parameters?: { [key: string]: any; }) {
    super();
    this.params = Observable.of(parameters);
  }
}

describe('DishdetailComponent', () => {
  let component: DishdetailComponent;
  let fixture: ComponentFixture<DishdetailComponent>;
  let mockActivatedRoute: MockActivatedRoute;
  let mockRouter: MockRouter;

  beforeEach(async(() => {
    let dishServiceStub = {
      getDishes(): Observable<Dish[]> {
        return Observable.of(DISHES);
      },
      getDish(id: number): Observable<Dish> {
        return Observable.of(DISHES.filter((dish) => (dish.id === id))[0]);
      },
      getFeaturedDish(): Observable<Dish> {
        return Observable.of(DISHES.filter((dish) => dish.featured)[0]);
      },
      getDishIds(): Observable<number[]> {
        return this.getDishes()
            .map(dishes => { return dishes.map(dish => dish.id) })
            .catch(error => { return error; } );
      }
    };
    mockActivatedRoute = new MockActivatedRoute({'id': '0'});
    mockRouter = new MockRouter();

    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        MaterialModule,
        FlexLayoutModule,
        ReactiveFormsModule,
        FormsModule,
        RouterModule
      ],
      declarations: [ DishdetailComponent ],
      providers: [
        { provide: DishService, useValue: dishServiceStub },
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: Router, useValue: mockRouter },
        FormBuilder,
        { provide: 'BaseURL', useValue: baseURL }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DishdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
