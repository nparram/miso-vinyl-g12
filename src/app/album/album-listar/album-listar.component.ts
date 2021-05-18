import { Component, OnInit } from '@angular/core';
import { Album } from '../album';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-album-listar',
  templateUrl: './album-listar.component.html',
  styleUrls: ['./album-listar.component.css']
})
export class AlbumListarComponent implements OnInit {

  selected = false;
  selectedAlbum: Album;

  constructor(private albumService: AlbumService) { }

  albums: Array<Album>;

  getAlbums(): void {
    this.albumService.getAlbums()
    .subscribe(albums => {
      this.albums = albums,
      error => console.log(`Error: ${error.error}`),
      () => console.log('Termino la ejecución')
    });
  }

  ngOnInit() {
    this.getAlbums();
  }

  onSelected(album: Album): void{
    this.selected = true;
    this.selectedAlbum = album;
  }

}
