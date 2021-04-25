import { Component, OnInit } from '@angular/core';
import { Album } from '../album';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-album-listar',
  templateUrl: './album-listar.component.html',
  styleUrls: ['./album-listar.component.css']
})
export class AlbumListarComponent implements OnInit {

  constructor(private albumService: AlbumService) { }

  albums: Array<Album>;

  getAlbums(): void {
    this.albumService.getAlbums()
    .subscribe(albums => {
      this.albums = albums;
    });
  }
  ngOnInit() {
    this.getAlbums();
  }

}
