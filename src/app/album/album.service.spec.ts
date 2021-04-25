/* tslint:disable:no-unused-variable */

import { TestBed, async, inject, getTestBed } from '@angular/core/testing';
import { AlbumService } from './album.service';

import {
  HttpTestingController,
  HttpClientTestingModule
} from '@angular/common/http/testing';
import { environment } from "../../environments/environment";

import faker from "faker";
import { Album } from './album';

describe('Service: Album', () => {
  let injector: TestBed;
  let service: AlbumService;
  let httpMock: HttpTestingController;
  let apiUrl = environment.baseUrl + "albums";

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AlbumService]
    });
    injector = getTestBed();
    service = injector.get(AlbumService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it("getAlbums() should return 10 records", () => {
    let mockAlbums: Album[] = [];

    for (let i = 1; i < 11; i++) {
      let album = new Album(
        i,
        faker.lorem.sentence(),
        faker.image.imageUrl(),
        faker.date.past(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        null,
        null,
        null
      );

      mockAlbums.push(album);
    }

    service.getAlbums().subscribe((albums) => {
      expect(albums.length).toBe(10);
    });

    const req = httpMock.expectOne(apiUrl);
    expect(req.request.method).toBe("GET");
    req.flush(mockAlbums);
  });

  it('should ...', inject([AlbumService], (service: AlbumService) => {
    expect(service).toBeTruthy();
  }));
});
