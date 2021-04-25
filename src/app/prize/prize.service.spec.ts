/* tslint:disable:no-unused-variable */

import { TestBed, async, inject, getTestBed } from "@angular/core/testing";
import { PrizeService } from "./prize.service";

import {
  HttpTestingController,
  HttpClientTestingModule,
} from "@angular/common/http/testing";


import * as faker from "faker";
import { Prize } from "./prize";
import { environment } from "../../environments/environment";

describe("Service: Prize", () => {
  let injector: TestBed;
  let service: PrizeService;
  let httpMock: HttpTestingController;
  let apiUrl = environment.baseUrl + "prizes";

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PrizeService],
    });
    injector = getTestBed();
    service = injector.get(PrizeService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it("getPost() should return 10 prizes", () => {
    let mockPosts: Prize[] = [];

    for (let i = 1; i < 11; i++) {
      let prize = new Prize(
        i,
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        null
      );

      mockPosts.push(prize);
    }

    service.getPrizes().subscribe((prizes) => {
      expect(prizes.length).toBe(10);
    });

    const req = httpMock.expectOne(apiUrl);
    expect(req.request.method).toBe("GET");
    req.flush(mockPosts);
  });
});
