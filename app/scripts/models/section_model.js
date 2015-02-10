Formservice.Section = Formservice.BaseModel.extend({
	fields: DS.hasMany('form-field',{async: true}),
	code: DS.attr('string'),
	label: DS.attr('string'),
	layout: DS.attr('string',{defaultValue: 'flow'}),
	isIndependent: DS.attr('boolean',{defaultValue: true}),
  	isFlow: function(){
    	return ('flow'==this.get('layout'));
  	}.property('layout'),
  	isBox: function(){
    	return ('box'==this.get('layout'));
  	}.property('layout'),
  	isTable: function(){
    	return ('table'==this.get('layout'));
  	}.property('layout'),
  	hasFields: function(){
    	return (this.get('fields')!=null && this.get('fields').length>0);
  	}.property('fields'),
    isBox3: function(){
      return ('box3'==this.get('layout'));
    }.property('layout')
});


Formservice.Section.FIXTURES = [
	  {
        id:0,
        version:0,
        fields: [0,1],
        layout: 'box3'
      },
      {
        id:1,
        version:0,
        label: 'Client Information Fields',
        layout: 'box',
        isIndependent: false,
        fields: [10,11,12,13]
      },
      {
      id: 5,
      version: 0,
      label: 'Client Information Radio-group',
      layout: 'box3',
      fields: [14,15],
      isIndependent: false
    },
    {
      id: 6,
      version: 0,
      label: 'Ratings',
      layout: 'box3',
      fields: [16,2],
      isIndependent: false
    },
      {
    	id: 2,
    	version: 0,
    	label: 'Group Ownership/Geographical Coverage',
    	layout: 'table',
    	fields: [17,18,19,20]
  	},
    {
      id: 3,
      version: 0,
      label: 'Wallet Sizing Fields',
      fields: [7,8],
      isIndependent: false,
      layout: 'box'
    },
    {
      id: 4,
      version: 0,
      label: 'Limit Allocation',
      layout: 'table',
      createdDate: null,
      fields: [3,4,5,6]
    }
      
];