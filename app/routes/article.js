import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.findRecord('article', params.article_id);
  },
  actions: {
    updateArticle2(article, params){
    console.log(params);
      Object.keys(params).forEach(function(key){
        if(params[key] !== undefined){
          article.set(key, params[key]);
        }
      });
      article.save();
      this.transitionTo("article");
    }
  }
});
