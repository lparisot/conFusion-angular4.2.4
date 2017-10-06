import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { Observable } from 'rxjs/Observable';

import { MaterialModule } from '../material/material.module';
import { HomeComponent } from './home.component';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';
import { DishService } from '../services/dish.service';
import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';
import { PromotionService } from '../services/promotion.service';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';
import { LeaderService } from '../services/leader.service';
import { baseURL } from '../shared/baseurl';


describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    let dishServiceStub = {
      getDishes(): Observable<Dish[]> {
        return Observable.of(DISHES).delay(2000);
      },
      getDish(id: number): Observable<Dish> {
        return Observable.of(DISHES.filter((dish) => (dish.id === id))[0]);
      },
      getFeaturedDish(): Observable<Dish> {
        return Observable.of(DISHES.filter((dish) => dish.featured)[0]);
      }
    };
    let promotionServiceStub = {
      getPromotions(): Observable<Promotion[]> {
        return Observable.of(PROMOTIONS).delay(2000);
      },
      getPromotion(id: number): Observable<Promotion> {
        return Observable.of(PROMOTIONS.filter((promotion) => (promotion.id === id))[0]);
      },
      getFeaturedPromotion(): Observable<Promotion> {
        return Observable.of(PROMOTIONS.filter((promotion) => promotion.featured)[0]);
      }
    };
    let leaderServiceStub = {
      getLeaders(): Observable<Leader[]> {
        return Observable.of(LEADERS);
      },
      getLeader(id: number): Observable<Leader> {
        return Observable.of(LEADERS.filter((leader) => (leader.id === id))[0]);
      },
      getFeaturedLeader(): Observable<Leader> {
        return Observable.of(LEADERS.filter((leader) => leader.featured)[0]);
      }
    };

    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        MaterialModule,
        FlexLayoutModule,
        RouterTestingModule.withRoutes([{ path: 'home', component: HomeComponent }])
      ],
      declarations: [ HomeComponent ],
      providers: [
        { provide: DishService, useValue: dishServiceStub },
        { provide: PromotionService, useValue: promotionServiceStub },
        { provide: LeaderService, useValue: leaderServiceStub },
        { provide: 'BaseURL', useValue: baseURL },
      ]
    })
    .compileComponents();

    let dishservice = TestBed.get(DishService);
    let promotionservice = TestBed.get(PromotionService);
    let leaderservice = TestBed.get(LeaderService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('dish item should be ok', () => {
    expect(component.dish.name).toBe('Uthappizza');
    expect(component.dish.featured).toBeTruthy();
  });
  it('promotion item should be ok', () => {
    expect(component.promotion.name).toBe('Weekend Grand Buffet');
    expect(component.promotion.featured).toBeTruthy();
  });
  it('leader item should be ok', () => {
    expect(component.leader.name).toBe('Alberto Somayya');
    expect(component.leader.featured).toBeTruthy();
  });
});
