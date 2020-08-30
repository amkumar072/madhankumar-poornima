import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RSVPPage } from './rsvp.page';

describe('RSVPPage', () => {
  let component: RSVPPage;
  let fixture: ComponentFixture<RSVPPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RSVPPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RSVPPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
