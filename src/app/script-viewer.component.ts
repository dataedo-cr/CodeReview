import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild, inject } from '@angular/core';
import hljs from 'highlight.js/lib/common';
import { ScriptRepositoryService } from './script-repository.service';

@Component({
  selector: 'app-script-viewer',
  templateUrl: './script-viewer.component.html',
  styleUrls: ['./script-viewer.component.scss']
})
export class ScriptViewerComponent implements OnInit, AfterViewInit {
ngOnInit() {
  this.repository.getScript().subscribe(script => {
    this.setScript(script);
  });
}
@Input()
public displayBackground = false;

repository = inject(ScriptRepositoryService);

@ViewChild('code', { static: false })
private codeEl: any;

public trimmedScript = '';

public setScript(data: string) {
  var script = '';
  script = data.toUpperCase();
  script = script.trim();

  this.trimmedScript = script.trim();
}

public getScript() {
  return this.trimmedScript;
}


public ngAfterViewInit() {
    this.highlight();
}

private highlight() {
    hljs.highlightElement(this.codeEl.nativeElement);
}
}
