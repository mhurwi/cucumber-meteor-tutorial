WidgetsCollection = new Mongo.Collection('widgets');

if (Meteor.isClient) {
  Template.hello.events({
    'click button#createWidget': function () {
      var name = $('input#name').val();

      WidgetsCollection.insert({
        name: name
      });
    }
  });

  Template.hello.helpers({
    widgets: function () {
      return WidgetsCollection.find();
    }
  });
}
