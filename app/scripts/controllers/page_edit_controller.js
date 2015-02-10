Formservice.PageEditController = Ember.ObjectController.extend({
  needs: 'page',
  actions: {
    save: function(){
      self = this
      this.get('buffer').forEach(function(attr){
        self.get('controllers.page.model').set(attr.key, attr.value);
      });
      this.transitionToRoute('page',this.get('model'));
    }
  }
});

