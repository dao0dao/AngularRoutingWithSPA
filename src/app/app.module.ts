import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import { AboutComponent } from './about/about.component';
import { EditComponent } from './edit/edit.component';
import { PostComponent } from './post/post.component';
import {DataService} from './service/data.service'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostsComponent,
    AboutComponent,
    EditComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
