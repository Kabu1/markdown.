import { Injectable } from '@angular/core';
import * as marked  from 'marked';
@Injectable({
  providedIn: 'root'
})
export class MarkdownParserService {

private md: any;

  constructor() {

    this.md = marked;
    this.md.setOptions({
      // renderer: new marked.Renderer(),
      // highlight: function(code: any, lang: any) {
      //   const hljs = require('highlight.js');
      //   const language = hljs.getLanguage(lang) ? lang : 'plaintext';
      //   return hljs.highlight(code, { language }).value;
      // },
      // langPrefix: 'hljs language-', // highlight.js css expects a top-level 'hljs' class.
      pedantic: false,
      gfm: true,
      breaks: false,
      sanitize: false,
      smartLists: true,
      smartypants: false,
      xhtml: false
    });


   }
   convert(markdown:string){
     return this.md.parse(markdown);
   }
}
