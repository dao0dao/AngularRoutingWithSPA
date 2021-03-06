import { Injectable } from '@angular/core';

export interface Post {
  subjectId: number,
  postId: number,
  subject: string,
  author: string,
  text: string,
  isActive?: boolean
}

@Injectable({
  providedIn: 'root'
})

export class DataService {

  subjectId: number = 3
  postId: number = 6

  posts: Post[] = [{
    subjectId: 0,
    postId: 0,
    subject: 'Angular jest fajny',
    author: 'Jak Kowalski',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa error sapiente, a aliquam voluptatibus, ipsam quidem quas sed, dolorum consectetur est nemo explicabo vero! Nihil dolor harum illum minima incidunt.',
    isActive: false
  }, {
    subjectId: 0,
    postId: 1,
    subject: 'Angular jest fajny',
    author: 'Ryba Jan',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa error sapiente, a aliquam voluptatibus, ipsam quidem quas sed, dolorum consectetur est nemo explicabo vero! Nihil dolor harum illum minima incidunt.',
    isActive: false
  }, {
    subjectId: 1,
    postId: 0,
    subject: 'Możliwe że jest ciężki',
    author: 'Tajga',
    text: 'Mr mr mru mr mr mru mru miau miau mr ph ph ph ph ph ph ph.',
    isActive: false
  }, {
    subjectId: 1,
    postId: 3,
    subject: 'Możliwe że jest ciężki',
    author: 'Leopold',
    text: 'Gdzie mój mriau  whiskas, mriau kolacja już jest 18.00, mriau mriau mriau mriau mriau.',
    isActive: false
  }, {
    subjectId: 2,
    postId: 4,
    subject: 'Jednak do opanowania',
    author: 'Tajga',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa error sapiente, a aliquam voluptatibus, ipsam quidem quas sed, dolorum consectetur est nemo explicabo vero! Nihil dolor harum illum minima incidunt.',
    isActive: false
  }, {
    subjectId: 2,
    postId: 5,
    subject: 'Jednak do opanowania',
    author: 'Leopold',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa error sapiente, a aliquam voluptatibus, ipsam quidem quas sed, dolorum consectetur est nemo explicabo vero! Nihil dolor harum illum minima incidunt.',
    isActive: false
  },]

  constructor() { }
}
