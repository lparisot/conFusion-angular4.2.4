import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { Observable } from 'rxjs/Observable';

import { MaterialModule } from '../material/material.module';
import { AboutComponent } from './about.component';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';
import { LeaderService } from '../services/leader.service';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async(() => {
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
        RouterTestingModule.withRoutes([{ path: 'about', component: AboutComponent }])
      ],
      declarations: [ AboutComponent ],
      providers: [
        { provide: LeaderService, useValue: leaderServiceStub },
      ]
    })
    .compileComponents();

    //let leaderservice = TestBed.get(LeaderService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
