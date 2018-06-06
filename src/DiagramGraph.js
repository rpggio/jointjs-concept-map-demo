
import yaml from 'js-yaml';
import diagramYml from '../data/diagram.yml';

import NodeShape from './NodeShape';
import CustomLink from './CustomLink';

const diagram = yaml.safeLoad(diagramYml);

var elements = [];
var links = [];

const relationRegex = /(.+) \[(.+)\]/;

diagram.elements.forEach(diagElement => {

  elements.push(
    new NodeShape({ id: diagElement.name })
      .setText(diagElement.name)
  );

  if (diagElement.relations){
    diagElement.relations.forEach(rel => {

      const match = rel.match(relationRegex);
      if (match && match.length === 3){
        const linkLabel = match[1];
        const targetName = match[2];
        const child = diagram.elements.find(e => e.name.startsWith(targetName));


        elements.push(
          new CustomLink()
            .connect(diagElement.name, child.name)
            .setLabelText(linkLabel)
        );
      }
    });
  }

});

export default elements;
