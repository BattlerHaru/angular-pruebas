import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalComponent } from './hospital.component';

describe('HospitalComponent', () => {
  let component: HospitalComponent;
  let fixture: ComponentFixture<HospitalComponent>;

  beforeEach(async(() => {
    // Como ahora angular trabaja con webpack, hay muchas cosas que ya no se utilizan como el .compileComponents o el async
    // TestBed.configureTestingModule({
    //   declarations: [ HospitalComponent ]
    // })
    // .compileComponents();
  }));

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HospitalComponent]
    })

    fixture = TestBed.createComponent(HospitalComponent);
    component = fixture.componentInstance;
    // detectChanges detecta los cambios en angular
    fixture.detectChanges();
  });

  it('Debe de crear un HospitalComponent', () => {
    expect(component).toBeTruthy();
  });
});
