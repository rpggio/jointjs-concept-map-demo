import joint from 'jointjs';

var LayoutControls = joint.mvc.View.extend({

  events: {
    change: 'layout',
    input: 'layout'
  },

  options: {
    padding: 50
  },

  init: function () {

    var options = this.options;

    this.listenTo(options.paper.model, 'change', function (cell, opt) {
      if (opt.layout) {
        this.layout();
      }
    });
  },

  layout: function () {

    var paper = this.options.paper;
    var graph = paper.model;
    var cells = this.options.cells;

    joint.layout.DirectedGraph.layout(cells, this.getLayoutOptions());

    if (graph.getCells().length === 0) {
      // The graph could be empty at the beginning to avoid cells rendering
      // and their subsequent update when elements are translated
      graph.resetCells(cells);
    }

    paper.fitToContent({
      padding: this.options.padding,
      allowNewOrigin: 'any'
    });

    this.trigger('layout');
  },

  getLayoutOptions: function () {
    return {
      setVertices: true,
      setLabels: true,
      ranker: 'network-simplex',
      rankDir: 'LR',
      align: 'UL',
      rankSep: 50,
      edgeSep: 50,
      nodeSep: 50
    };
  }

});

export default LayoutControls;
