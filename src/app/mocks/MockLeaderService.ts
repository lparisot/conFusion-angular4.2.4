/*
import { SpyObject } from './helper';
import { LeaderService } from '../services/leader.service';
import Spy = jasmine.Spy;

export class MockLeaderService extends SpyObject {
  getLeadersSpy: Spy;
  getLeaderSpy: Spy;
  getFeaturedLeaderSpy: Spy;
  saveSpy: Spy;
  fakeResponse: any;

  constructor() {
    super( LeaderService );

    this.fakeResponse = null;
    this.getLeadersSpy = this.spy('getLeaders').andReturn(this);
    this.getLeaderSpy = this.spy('getLeader').andReturn(this);
    this.getFeaturedLeaderSpy = this.spy('getFeaturedLeader').andReturn(this);
    this.saveSpy = this.spy('save').andReturn(this);
  }

  subscribe(callback: any) {
    callback(this.fakeResponse);
  }

  setResponse(json: any): void {
    this.fakeResponse = json;
  }
}
*/
