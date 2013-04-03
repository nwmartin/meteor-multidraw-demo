points = new Meteor.Collection('pointsCollection');
var canvas;

Template.drawingSurface.points = function () {
  return points.find();
}

Deps.autorun( function () {
  Meteor.subscribe('pointsSubscription');
});

Meteor.startup( function() {
  canvas = new Canvas();

  Deps.autorun( function() {
    var data = points.find({}).fetch();
    $('h2').hide();
    if (canvas) {
      canvas.draw(data);
    }
  });
});

var markPoint = function() {
  var offset = $('#canvas').offset();
      points.insert({
      x: (event.pageX - offset.left),
      y: (event.pageY - offset.top)});
}

Template.drawingSurface.events({
  'click input': function (event) {
    Meteor.call('clear', function() {
      canvas.clear();
    });
  },
  'click': function (event) {
    markPoint();
  },
  'mousedown': function (event) {
    Session.set('draw', true);
  },
  'mouseup': function (event) {
    Session.set('draw', false);
  },
  'mousemove': function (event) {
    if (Session.get('draw')) {
      markPoint();
    }
  }
});
