import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideosComponent }      from './videos/videos.component';
import { VideoDetailComponent }  from './video-detail/video-detail.component';
import { DashboardComponent }  from './dashboard/dashboard.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import {CommentsComponent} from "./comments/comments.component";

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'videos', component: VideosComponent },
  { path: 'detail/:id', component: VideoDetailComponent },
  { path: 'upload', component: FileUploadComponent },
  { path:'detail/:id',component: CommentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
