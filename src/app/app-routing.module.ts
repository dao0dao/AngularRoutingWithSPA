import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import { AboutComponent } from './about/about.component';
import { EditComponent } from './edit/edit.component';
import { PostComponent } from './post/post.component';
import { AuthGuardService } from './auth-guard.service';
import { ErroPageComponent } from './erro-page/erro-page.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'edit', canActivate: [AuthGuardService], component: EditComponent },
  { path: 'posts/:subjectId', component: PostComponent },
  { path: 'error', component: ErroPageComponent },
  { path: '**', redirectTo: '/error' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
