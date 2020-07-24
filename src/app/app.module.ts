import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import { AboutComponent } from './about/about.component';
import { EditComponent } from './edit/edit.component';
import { PostComponent } from './post/post.component';
import { DataService } from './service/data.service'
import { FunctionsService } from './service/functions.service';
import { AddTopicComponent } from './add-topic/add-topic.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostsComponent,
    AboutComponent,
    EditComponent,
    PostComponent,
    AddTopicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DataService, FunctionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
