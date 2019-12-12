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
    // this.drawSimpleDiagram();ßßßßß
    this.drawSimpleDiagramAndModel();
  }

  private drawSimpleDiagramAndModel() {
    const $ = go.GraphObject.make;
    const myDiagram = $(go.Diagram, 'myDiagramDiv', {'undoManager.isEnabled': true});

    const myModel = $(go.Model);
    myDiagram.model = myModel;

    myModel.nodeDataArray = [
      { key: 'Alpha'},
      { key: 'Beta'},
      { key: 'Gamma'}
    ];
  }
  // private drawSimpleDiagram() {
  //   const $ = go.GraphObject.make;
  //   const myDiagram = $(go.Diagram, 'myDiagramDiv');

  //   const nodeDataArray = [
  //     {key: 'Alpha', color: 'lime'},
  //     {key: 'Beta', color: 'cyan'}
  //   ];

  //   const linkDataArray = [
  //     {to: 'Beta', from: 'Alpha'}
  //   ];

  //   myDiagram.model = new go.GraphLinksModel(nodeDataArray, linkDataArray);
  //   myDiagram.nodeTemplate =
  //     $(go.Node, 'Auto',
  //       $(go.Shape, 'RoundedRectangle', { fill: 'white' },
  //         new go.Binding('fill', 'color')
  //       ),
  //       $(go.TextBlock, 'Hello',
  //         new go.Binding('text', 'key')
  //       )
  //     );
  // }
}
