Formservice.Page = Formservice.BaseModel.extend({
  name: DS.attr('string'),
  createdDate: DS.attr('date'),
  fields: DS.hasMany('form-field',{async: true}),
  sections: DS.hasMany('section',{async: true}),
  subPages: DS.hasMany('page',{async: true}),
  pageLayout: DS.attr('string',{defaultValue: 'flow'}),

  sectionLayout: DS.attr('string',{defaultValue: 'flow'}),


  isSectionFlow: function(){
      return ('flow'==this.get('sectionLayout'));
  }.property('sectionLayout'),
  isSectionBox: function(){
      return ('box'==this.get('sectionLayout'));
  }.property('sectionLayout'),
  isSectionBox3: function(){
      return ('box3'==this.get('sectionLayout'));
  }.property('sectionLayout'),



  isPageFlow: function(){
      return ('flow'==this.get('pageLayout'));
  }.property('pageLayout'),
  isPageBox: function(){
      return ('box'==this.get('pageLayout'));
  }.property('pageLayout'),
  isPageBox3: function(){
      return ('box3'==this.get('pageLayout'));
  }.property('pageLayout'),

  hasSubPages: function(){
    return (this.get('subPages').length>0);
  }.property('subPages'),
  hasSections: function(){
    return (this.get('sections')!=null && this.get('sections').length>0);
  }.property('sections')
});

Formservice.FormSerializer = DS.ActiveModelSerializer.extend(DS.EmbeddedRecordsMixin, {
  attrs: {
    fields: {embedded: 'always'}
  }
});

// probably should be mixed-in...
Formservice.Page.reopen({
  attributes: function(){
    var model = this;
    return Ember.keys(this.get('data')).map(function(key){
      return Em.Object.create({ model: model, key: key, valueBinding: 'model.' + key });
    });
  }.property()
});

// delete below here if you do not want fixtures
Formservice.Page.FIXTURES = [

  {
    id: 0,
    version: 0,
    name: 'DAP 2015',
    createdDate: null,
    sections: [0],
    subPages: [1,2],
    pageLayout: 'flow'
  },
  {
    id: 1,
    version: 0,
    name: 'Client Information',
    createdDate: null,
    sections: [1,5,6,2],
    sectionLayout: 'flow'
  },

  {
    id: 2,
    version: 0,
    name: 'Wallet Sizing',
    createdDate: null,
    sections: [3,4]
  }

  
];
