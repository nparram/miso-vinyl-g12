/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { PrizeListarComponent } from "./prize-listar.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import * as faker from "faker";
import { Prize } from "../prize";
/*import { Editorial } from "src/app/editorial/editorial";*/

describe("PrizeListarComponent", () => {
  let component: PrizeListarComponent;
  let fixture: ComponentFixture<PrizeListarComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PrizeListarComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrizeListarComponent);
    component = fixture.componentInstance;
    /*let editorial = new Editorial(
      faker.random.number(),
      faker.lorem.sentence()
    );*/
    component.prizes = [
      new Prize(
        1,
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        null
      ),
    ];
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("Should have an figcaption element ", () => {
    expect(debug.query(By.css("figcaption")).nativeElement.innerText).toContain(
      component.prizes[0].name
    );

    /*expect(debug.query(By.css("figcaption")).nativeElement.innerText).toContain(
      component.books[0].editorial.name
    );*/
  });
});


