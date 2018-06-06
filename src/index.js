import joint from 'jointjs';
import 'jointjs/dist/joint.css';

import LayoutControls from './LayoutControls';

import alphabetGraph from './AlphabetGraph';
import diagramGraph from './DiagramGraph';

const appElement = document.getElementById("app");

var controls = new LayoutControls({
  paper: new joint.dia.Paper({
    el: appElement,
    interactive: function (cellView) {
      return cellView.model.isElement();
    }
  }),
  cells: diagramGraph
});

controls.layout();

