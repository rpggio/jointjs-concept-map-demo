import Shape from './Shape';
import Link from './Link';

const buildGraphFromAdjacencyList = function (adjacencyList) {

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

  return elements.concat(links);
}

const adjacencyList = {
    a: ['b', 'c', 'd'],
    b: ['d', 'e'],
    c: [],
    d: [],
    e: ['e'],
    f: [],
    g: ['b', 'i'],
    h: ['f'],
    i: ['f', 'h']
  };

const graph = buildGraphFromAdjacencyList(adjacencyList);

export default graph;
