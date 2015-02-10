Formservice.PagesRoute = Ember.Route.extend({
  model: function() {
    return this.get('store').find('page');
  }
});

