import joint from 'jointjs';
import 'jointjs/dist/joint.css';
import yaml from 'js-yaml';

import LayoutControls from './LayoutControls';
import diagramYml from '../data/diagram.yml';

const diagram = yaml.safeLoad(diagramYml);

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

