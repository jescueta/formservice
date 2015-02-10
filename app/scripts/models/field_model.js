Formservice.FormField = Formservice.BaseModel.extend({
  name: DS.attr('string'),
  label: DS.attr('string'),
  layout: DS.attr('string'),
  pages: DS.hasMany('page'),
  isTextField: function(){
  	return ('textfield'==this.get('layout'));
  }.property('layout'),
  isComboBox: function(){
  	return ('combobox'==this.get('layout'));
  }.property('layout'),
  isTextArea: function(){
  	return ('textarea'==this.get('layout'));
  }.property('layout'),
  isRadio: function(){
  	return ('radio'==this.get('layout'));
  }.property('layout'),
  isDate: function(){
  	return ('date'==this.get('layout'));
  }.property('layout')


});

Formservice.FormField.FIXTURES = [
	{
        id:0,
        version:0,
        name: 'accountPlanCreator',
        label: 'AP Creator Name',
        layout: 'textfield'
      },
      {
        id:1,
        version:0,
        name: 'accountPlanCreationDate',
        label: 'AP Creation Date',
        layout: 'date'


      },
      {
        id:2,
        version:0,
        name: 'scbCreditGrade',
        label: 'Credit Grade',
        layout: 'combobox'
      },
      {
        id:3,
        version:0,
        name: 'previousYearLimit',
        label: 'Previous Year Limit',
        layout: 'textfield'
      },
      {
        id:4,
        version:0,
        name: 'currentYearLimit',
        label: 'Current Year Limit',
        layout: 'textfield'
      },
      {
        id:5,
        version:0,
        name: 'previousYearForecastLimit',
        label: 'Previous Year Forecast Limit',
        layout: 'textfield'
      },
      {
        id:6,
        version:0,
        name: 'currentYearForecastLimit',
        label: 'Current Year Forecast Limit',
        layout: 'textfield'
      },
      {
        id:7,
        version:0,
        name: 'limitComments',
        label: 'Comments',
        layout: 'textarea'
      },
      {
        id:8,
        version:0,
        name: 'pmiYear',
        label: 'PMI Year',
        layout: 'textfield'
      },
      {
        id:9,
        version:0,
        name: 'clientNeeds',
        label: 'Client Needs',
        layout: 'combobox'
      },
      {
        id:9,
        version:0,
        name: 'clientNeeds',
        label: 'Client Needs',
        layout: 'combobox'
      },
      {
        id:10,
        version:0,
        name: 'businessDescription',
        label: 'Business Description',
        layout: 'textarea'
      },
      {
        id:11,
        version:0,
        name: 'keyRecentDevelopments',
        label: 'Key Recent Developments',
        layout: 'textarea'
      },
      {
        id:12,
        version:0,
        name: 'clientCompetitiveLandscape',
        label: 'Client Competitive Landscape',
        layout: 'textarea'
      },
      {
        id:13,
        version:0,
        name: 'businessRisksAndMitigants',
        label: 'Business Risks and Mitigants',
        layout: 'textarea'
      },
      {
        id:14,
        version:0,
        name: 'operatingAccount',
        label: 'Does the client have an operating account with us?',
        layout: 'radio'
      },
      {
        id:15,
        version:0,
        name: 'doesHaveIsda',
        label: 'Does the client have ISDA or equialent signed for all FM counterparties?',
        layout: 'radio'
      },
      {
        id:16,
        version:0,
        name: 'externalRating',
        label: 'External Rating',
        layout: 'textfield'
      },
      {
        id:17,
        version:0,
        name: 'keyGroupEntity',
        label: 'Key Group Entity',
        layout: 'textfield'
      },
      {
        id:18,
        version:0,
        name: 'keyGrouplayout',
        label: 'Key Group layout',
        layout: 'textfield'
      },
      {
        id:19,
        version:0,
        name: 'effectiveStake',
        label: 'Effective Stake %',
        layout: 'textfield'
      },
      {
        id:20,
        version:0,
        name: 'businessIndustry',
        label: 'Business / Industry',
        layout: 'textfield'
      },
      {
        id:21,
        version:0,
        name: 'totalWallet',
        label: 'Total Wallet %',
        layout: 'textfield'
      },
      {
        id:22,
        version:0,
        name: 'operatingCountries',
        label: 'Operating Countries',
        layout: 'combobox'
      },
      {
        id:23,
        version:0,
        name: 'promoterControlledClient',
        label: 'Promoter Controlled Client?',
        layout: 'radio'
      }
];