import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutorizzazioneComponent } from './autorizzazione.component';

describe('AutorizzazioneComponent', () => {
  let component: AutorizzazioneComponent;
  let fixture: ComponentFixture<AutorizzazioneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutorizzazioneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutorizzazioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
