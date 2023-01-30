import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerVouchersComponent } from './manager-vouchers.component';

describe('ManagerVouchersComponent', () => {
  let component: ManagerVouchersComponent;
  let fixture: ComponentFixture<ManagerVouchersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerVouchersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagerVouchersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
