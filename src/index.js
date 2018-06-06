import joint from 'jointjs';
import 'jointjs/dist/joint.css';
import yaml from 'js-yaml';

import LayoutControls from './LayoutControls';
import diagramYml from '../data/diagram.yml';

import alphabetGraph from './AlphabetGraph';

const diagram = yaml.safeLoad(diagramYml);

const appElement = document.getElementById("app");

var controls = new LayoutControls({
  paper: new joint.dia.Paper({
    el: appElement,
    interactive: function (cellView) {
      return cellView.model.isElement();
    }
  }),
    cells: alphabetGraph
});

controls.layout();

