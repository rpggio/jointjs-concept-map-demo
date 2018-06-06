import joint from 'jointjs';

var Shape = joint.dia.Element.define('demo.Shape', {
  size: {
    width: 200,
    height: 50
  },
  attrs: {
    rect: {
      refWidth: '100%',
      refHeight: '100%',
      fill: 'ivory',
      stroke: 'gray',
      strokeWidth: 2,
      rx: 10,
      ry: 10
    },
    text: {
      refX: '50%',
      refY: '50%',
      yAlignment: 'middle',
      xAlignment: 'middle',
      fontSize: 20
    }
  }
}, {
    markup: '<rect/><text/>',

    setText: function (text) {
      return this.attr('text/text', text || '');
    }
  });

  export default Shape;
  