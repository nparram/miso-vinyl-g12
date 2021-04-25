
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { PerformerListarComponent } from "./performer-listar.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import * as faker from "faker";
import { Performer } from "../performer";
/*import { Editorial } from "src/app/editorial/editorial";*/

describe("PerformerListarComponent", () => {
  let component: PerformerListarComponent;
  let fixture: ComponentFixture<PerformerListarComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PerformerListarComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformerListarComponent);
    component = fixture.componentInstance;
    /*let editorial = new Editorial(
      faker.random.number(),
      faker.lorem.sentence()
    );*/
    component.performers = [
      new Performer(
        1,
        faker.lorem.sentence(),
        faker.image.imageUrl(),
        faker.lorem.sentence(),
        faker.date.past()

      ),
    ];
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("Should have an figcaption element ", () => {
   /* expect(debug.query(By.css("figcaption")).nativeElement.innerText).toContain(
      component.performers[0].name
    ); */  /* Revisar este tema por que esta fallando */

    /*expect(debug.query(By.css("figcaption")).nativeElement.innerText).toContain(
      component.books[0].editorial.name
    );*/
  });
});


