import { Injectable } from '@angular/core';

export interface Post {
  subjectId: number,
  postId: number,
  subject: string,
  author: string,
  text: string
}

@Injectable({
  providedIn: 'root'
})

export class DataService {

  posts: Post[] = [{
    subjectId: 0,
    postId: 0,
    subject: 'Angular jest fajny',
    author: 'Jak Kowalski',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa error sapiente, a aliquam voluptatibus, ipsam quidem quas sed, dolorum consectetur est nemo explicabo vero! Nihil dolor harum illum minima incidunt.'
  }, {
    subjectId: 0,
    postId: 1,
    subject: 'Angular jest fajny',
    author: 'Ryba Jan',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa error sapiente, a aliquam voluptatibus, ipsam quidem quas sed, dolorum consectetur est nemo explicabo vero! Nihil dolor harum illum minima incidunt.'
  }, {
    subjectId: 1,
    postId: 0,
    subject: 'Możliwe że jest ciężki',
    author: 'Tajga',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa error sapiente, a aliquam voluptatibus, ipsam quidem quas sed, dolorum consectetur est nemo explicabo vero! Nihil dolor harum illum minima incidunt.'
  }, {
    subjectId: 1,
    postId: 1,
    subject: 'Możliwe że jest ciężki',
    author: 'Leopold',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa error sapiente, a aliquam voluptatibus, ipsam quidem quas sed, dolorum consectetur est nemo explicabo vero! Nihil dolor harum illum minima incidunt.'
  },{
    subjectId: 2,
    postId: 0,
    subject: 'Jednak do opanowania',
    author: 'Tajga',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa error sapiente, a aliquam voluptatibus, ipsam quidem quas sed, dolorum consectetur est nemo explicabo vero! Nihil dolor harum illum minima incidunt.'
  }, {
    subjectId: 2,
    postId: 1,
    subject: 'Jednak do opanowania',
    author: 'Leopold',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa error sapiente, a aliquam voluptatibus, ipsam quidem quas sed, dolorum consectetur est nemo explicabo vero! Nihil dolor harum illum minima incidunt.'
  },]

  constructor() { }
}
