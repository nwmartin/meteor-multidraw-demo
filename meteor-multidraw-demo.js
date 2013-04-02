points = new Meteor.Collection('points');

if (Meteor.isClient) {
  Template.drawingSurface.points = function () {
    return points.find();
  }
}

if (Meteor.isServer) {
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
