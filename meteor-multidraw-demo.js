points = new Meteor.Collection('pointsCollection');

if (Meteor.isClient) {
  Template.drawingSurface.points = function () {
    return points.find();
  }

  Deps.autorun( function () {
    Meteor.subscribe('pointsSubscription');
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
