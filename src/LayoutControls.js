import joint, { Shape, Link } from 'jointjs';

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
    if (options.adjacencyList) {
      options.cells = this.buildGraphFromAdjacencyList(options.adjacencyList);
    }

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
      ranker: 'longer-path',
      rankDir: 'LR',
      align: 'UL',
      rankSep: 50,
      edgeSep: 50,
      nodeSep: 50
    };
  },

  buildGraphFromAdjacencyList: function (adjacencyList) {

    var elements = [];
    var links = [];

    Object.keys(adjacencyList).forEach(function (parentLabel) {
      // Add element
      elements.push(
        new Shape({ id: parentLabel }).setText(parentLabel)
      );
      // Add links
      adjacencyList[parentLabel].forEach(function (childLabel) {
        links.push(
          new Link()
            .connect(parentLabel, childLabel)
            .setLabelText(parentLabel + '-' + childLabel)
        );
      });
    });

    // Links must be added after all the elements. This is because when the links
    // are added to the graph, link source/target
    // elements must be in the graph already.
    return elements.concat(links);
  }

});

export default LayoutControls;
