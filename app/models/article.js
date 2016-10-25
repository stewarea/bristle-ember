import DS from 'ember-data';

export default DS.Model.extend({
  model(params){
    return this.store.findRecord('article', params.article_id);
  },
  title: DS.attr(),
  author: DS.attr(),
  image: DS.attr(),
  text: DS.attr()
});
