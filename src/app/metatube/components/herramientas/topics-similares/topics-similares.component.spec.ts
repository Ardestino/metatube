import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicsSimilaresComponent } from './topics-similares.component';

describe('TopicsSimilaresComponent', () => {
  let component: TopicsSimilaresComponent;
  let fixture: ComponentFixture<TopicsSimilaresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicsSimilaresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicsSimilaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
