import joint from 'jointjs';
import 'jointjs/dist/joint.css';

const appElement = document.getElementById("app");

var graph = new joint.dia.Graph();

var paper = new joint.dia.Paper({
  el: appElement,
  width: 600,
  height: 200,
  model: graph,
  gridSize: 1
});

var rect = new joint.shapes.basic.Rect({
  position: { x: 100, y: 30 },
  size: { width: 100, height: 30 },
  attrs: { rect: { fill: 'blue' }, text: { text: 'my box', fill: 'white' } }
});

var rect2 = rect.clone();
rect2.translate(300);

var link = new joint.dia.Link({

  attrs: {
    '.connection': {
      stroke: 'gray',
      strokeWidth: 2,
      pointerEvents: 'none',
      targetMarker: {
        type: 'path',
        fill: 'gray',
        stroke: 'none',
        d: 'M 10 -10 0 0 10 10 z'
      }
    }
  },

  labels: [
    {
      attrs: {
        text: {
          text: 'foooo'
        }
      }
    }
  ],
  source: { id: rect.id },
  target: { id: rect2.id }
});

graph.addCells([rect, rect2, link]);

