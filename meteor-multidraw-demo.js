points = new Meteor.Collection('pointsCollection');

if (Meteor.isClient) {

  var svg;

  var createSvg = function() {
    svg = d3.select('#canvas').append('svg')
      .attr('width', '100%')
      .attr('height', '100%');
  }

  var clearSvg = function() {
    d3.select('svg').remove();
    createSvg();
  }

  Template.drawingSurface.points = function () {
    return points.find();
  }

  Deps.autorun( function () {
    Meteor.subscribe('pointsSubscription');
  });

  Meteor.startup( function() {
    createSvg();
  });

  Deps.autorun( function() {
    var data = points.find().fetch();
    if (svg) {
      svg.selectAll('circle').data(data, function(d) { return d._id; })
      .enter().append('circle')
      .attr('r', 10)
      .attr('cx', function (d) { return d.x; })
      .attr('cy', function (d) { return d.y; });
    }
  });

  Template.drawingSurface.events({
    'click input': function (event) {
      Meteor.call('clear', function() {
        clearSvg();
      });
    },
    'click': function (event) {
      var offset = $('#canvas').offset();
      points.insert({
        x: (event.x - offset.left),
        y: (event.y - offset.top)});
    },
    'mousedown': function (event) {
      Session.set('draw', true);
    },
    'mouseup': function (event) {
      Session.set('draw', false);
    },
    'mousemove': function (event) {
      if (Session.get('draw')) {
        var offset = $('#canvas').offset();
        points.insert({
        x: (event.x - offset.left),
        y: (event.y - offset.top)});
      }
    }
  });
}

if (Meteor.isServer) {
  Meteor.publish('pointsSubscription', function () {
    return points.find();
  });

  Meteor.methods({
    'clear': function () {
      points.remove({});
    }
  });
}
