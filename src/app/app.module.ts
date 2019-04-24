import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FileSelectDirective } from 'ng2-file-upload';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VideoDetailComponent } from './video-detail/video-detail.component';
import { VideosComponent } from './videos/videos.component';
import { CommentsComponent } from './comments/comments.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { DescriptionComponent } from './description/description.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    VideoDetailComponent,
    VideosComponent,
    FileSelectDirective,
    FileUploadComponent,
    CommentsComponent,
    DescriptionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
