import { Component } from '@angular/core';
import { MarkdownParserService } from './markdown-parser.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ MarkdownParserService]
})
export class AppComponent {
  convertedText!: string;

  constructor(
    private md: MarkdownParserService){
  }
  updateOutput(mdText:string){
    this.convertedText = this.md.convert(mdText);
  }
}
