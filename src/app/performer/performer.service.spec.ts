
/* tslint:disable:no-unused-variable */

import { TestBed, async, inject, getTestBed } from "@angular/core/testing";
import { PerformerService } from "./performer.service";

import {
 HttpTestingController,
 HttpClientTestingModule,
} from "@angular/common/http/testing";

import * as faker from "faker";
import { Performer } from "./performer";
import { environment } from "../../environments/environment";

describe("Service: Book", () => {
 let injector: TestBed;
 let service: PerformerService;
 let httpMock: HttpTestingController;
 let apiUrl = environment.baseUrl + "performers";

 beforeEach(() => {
   TestBed.configureTestingModule({
     imports: [HttpClientTestingModule],
     providers: [PerformerService],
   });
   injector = getTestBed();
   service = injector.get(PerformerService);
   httpMock = injector.get(HttpTestingController);
 });

 afterEach(() => {
   httpMock.verify();
 });

 it("getPost() should return 10 records", () => {
   let mockPosts: Performer[] = [];

   for (let i = 1; i < 11; i++) {
     let performer = new Performer(
       i,
       faker.lorem.sentence(),
       faker.image.imageUrl(),
       faker.lorem.sentence(),
       faker.date.past(),

     );

     mockPosts.push(performer);
   }

   service.getPerformer().subscribe((performer) => {
     expect(performer.length).toBe(10);
   });

   const req = httpMock.expectOne(apiUrl);
   expect(req.request.method).toBe("GET");
   req.flush(mockPosts);
 });
});


