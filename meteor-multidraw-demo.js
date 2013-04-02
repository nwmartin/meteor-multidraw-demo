points = new Meteor.Collection('pointsCollection');

if (Meteor.isClient) {

  var svg;

  Template.drawingSurface.points = function () {
    return points.find();
  }

  Deps.autorun( function () {
    Meteor.subscribe('pointsSubscription');
  });

  Meteor.startup( function() {
    svg = d3.select('#canvas').append('svg')
      .attr('width', '100%')
      .attr('height', '100%');
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
    'click': function (event) {
      var offset = $('#canvas').offset();
      points.insert({
        x: (event.x - offset.left),
        y: (event.y - offset.top)});
    }
  });
}

if (Meteor.isServer) {
  Meteor.publish('pointsSubscription', function () {
    return points.find();
  });

  Meteor.startup(function () {
    if (points.find().count() == 0) {
      points.insert({x: 100, y: 100});
      points.insert({x: 100, y: 200});
      points.insert({x: 100, y: 300});
      points.insert({x: 100, y: 400});
      points.insert({x: 100, y: 500});
    }
  });
}
