import joint from 'jointjs';
import 'jointjs/dist/joint.css';

import LayoutControls from './LayoutControls';

const appElement = document.getElementById("app");

var controls = new LayoutControls({
  paper: new joint.dia.Paper({
    el: appElement,
    interactive: function (cellView) {
      return cellView.model.isElement();
    }
  }),
  adjacencyList: {
    a: ['b', 'c', 'd'],
    b: ['d', 'e'],
    c: [],
    d: [],
    e: ['e'],
    f: [],
    g: ['b', 'i'],
    h: ['f'],
    i: ['f', 'h']
  }
});

controls.layout();

