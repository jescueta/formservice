Formservice.Router.map(function () {
  
  this.resource('pages', function(){
    this.resource('page', { path: '/:page_id' }, function(){
      this.route('edit');
    });
    this.route('create');
  });
  
  
});
