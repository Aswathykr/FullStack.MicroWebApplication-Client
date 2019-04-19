
import { Component, OnInit , Input} from '@angular/core';
import { Video } from '../video';
import { VideoService } from '../video.service'
import { Location } from '@angular/common';
import {ActivatedRoute} from '@angular/router'
import {Comment} from "../comment";

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css']
})
export class VideoDetailComponent implements OnInit {

  @Input()
  video: Video;

  @Input()
  videoId : number;
 private comment;
  constructor(
    private route: ActivatedRoute,
    private videoService: VideoService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getVideo();
    this.getComment();

  }
  
  getVideo(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.videoService.getVideo(id)
      .subscribe(video => {
        this.video = video;

        console.log("************** " + video.id)
        console.log("************** " + video.description)
      });
  }
  goBack(): void {
    this.location.back();
  }

  getComment(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.videoService.getComments(id)
      .subscribe(comment => {
        this.comment = comment;
      });
  }

}

