import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerRepairsComponent } from './manager-repairs.component';

describe('ManagerRepairsComponent', () => {
  let component: ManagerRepairsComponent;
  let fixture: ComponentFixture<ManagerRepairsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerRepairsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagerRepairsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
