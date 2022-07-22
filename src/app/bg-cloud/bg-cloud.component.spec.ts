import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BgCloudComponent } from './bg-cloud.component';

describe('BgCloudComponent', () => {
  let component: BgCloudComponent;
  let fixture: ComponentFixture<BgCloudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BgCloudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BgCloudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
