import { Component, OnInit } from '@angular/core';
import { Video } from '../video';
import { VideoService } from '../video.service';


@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})

export class VideosComponent implements OnInit {
  videos = Video[5];
  // private comment: Comment[];

  constructor(private videoService: VideoService) { 
    this.getVideos();


  }
  // selectedVideo: Video;
  // onSelect(video: Video): void {
  //   this.selectedVideo = video;
  // }
  ngOnInit() {  
  }

  getVideos(): void {
    this.videoService.getVideos()
        .subscribe(videos => {
          this.videos = videos});
  }
  // getComments(): void {
  //   this.videoService.getComments()
  //     .subscribe(comment => {
  //       this.comment = comment});
  // }

}
