import { Component, OnInit } from '@angular/core';
import * as go from 'gojs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'GoJs Sample';

  ngOnInit() {
    console.log('I am in App Init');

    this.drawSimpleDiagramAndModel();
  }

  private drawSimpleDiagramAndModel() {
    const $ = go.GraphObject.make;
    const myDiagram = $(go.Diagram, 'myDiagramDiv', {'undoManager.isEnabled': true});

    const myModel = $(go.Model);
    myDiagram.model = myModel;

    myDiagram.nodeTemplate =
      $(go.Node,
        $(go.TextBlock,
          new go.Binding('text', 'key')
        ),
      );

    myModel.nodeDataArray = [
      { key: 'Alpha'},
      { key: 'Beta'},
      { key: 'Gamma'}
    ];
  }
}
