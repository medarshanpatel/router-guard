import { Component, OnInit } from '@angular/core';
import { Ng2Summernote } from 'ng2-summernote/ng2-summernote';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  // Editors ng-model bindings
  data: string = 'appendix';
  data2: string = 'content';
  
  // If you want add editors bindings to some model
  model: any = {
    data: this.data,
    data2: this.data2
  }
  
  // OnSubmit add current editors bindings to some model
  onSubmit() {
    this.model.data = this.data;
    this.model.data2 = this.data2;
  }

  constructor() { }

  ngOnInit() { }

}
