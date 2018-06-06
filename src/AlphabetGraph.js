import joint from "jointjs";
import NodeShape from "./NodeShape";
import CustomLink from "./CustomLink";

const buildGraphFromAdjacencyList = function(adjacencyList) {
  var elements = [];
  var links = [];

  Object.keys(adjacencyList).forEach(function(parentLabel) {
    // Add element
    elements.push(new NodeShape({ id: parentLabel }).setText(parentLabel));
    // Add links
    adjacencyList[parentLabel].forEach(function(childLabel) {
      // links.push(
      //   new joint.dia.Link({ source: { id: parentLabel }, target: { id: childLabel } })
      //     .prop("labels/0/attrs/text/text", parentLabel + '-' + childLabel)
      // );

      links.push(
        new CustomLink()
          .connect(parentLabel, childLabel)
          .setLabelText(parentLabel + "-" + childLabel)
      );
    });
  });

  return elements.concat(links);
};

const adjacencyList = {
  a: ["b", "c", "d"],
  b: ["d", "e"],
  c: [],
  d: [],
  e: ["e"],
  f: [],
  g: ["b", "i"],
  h: ["f"],
  i: ["f", "h"]
};

const graph = buildGraphFromAdjacencyList(adjacencyList);

export default graph;
