import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerExpertComponent } from './creer-expert.component';

describe('CreerExpertComponent', () => {
  let component: CreerExpertComponent;
  let fixture: ComponentFixture<CreerExpertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreerExpertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreerExpertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
