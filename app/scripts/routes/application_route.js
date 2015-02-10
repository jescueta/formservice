Formservice.ApplicationRoute = Ember.Route.extend({
    // admittedly, this should be in IndexRoute and not in the
    // top level ApplicationRoute; we're in transition... :-)
    model: function () {
        return ['Menu 1', 'Menu 2', 'Menu 3'];
    }
});

Formservice.IndexRoute = Ember.Route.extend({
  beforeModel: function() {
    this.transitionTo('pages');
  }
});
