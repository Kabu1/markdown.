import { Component } from '@angular/core';
import { MarkdownParserService } from './markdown-parser.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ MarkdownParserService]
})
export class AppComponent {
  convertedtext = 'string';
  constructor(
    private md: MarkdownParserService){
  }
  updateOutput(mdText:string){
    this.convertedtext = this.md.convert(mdText);
  }
}
