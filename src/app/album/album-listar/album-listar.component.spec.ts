/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AlbumListarComponent } from './album-listar.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Album } from '../album';
import * as faker from "faker";

describe('AlbumListarComponent', () => {
  let component: AlbumListarComponent;
  let fixture: ComponentFixture<AlbumListarComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumListarComponent ],
      imports: [HttpClientTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumListarComponent);
    component = fixture.componentInstance;

    component.albums = [
      new Album(
        faker.random.number(),
        faker.lorem.sentence(),
        faker.image.imageUrl(),
        faker.date.past(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        null,
        null,
        null
      )
    ];

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  /*it('should create', () => {
    expect(component).toBeTruthy();
  });*/

  it("Should have an figcaption element ", () => {
    expect(debug.query(By.css("figcaption")).nativeElement.innerText).toContain(
      component.albums[0].name
    );
  });
});
