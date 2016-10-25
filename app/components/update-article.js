import Ember from 'ember';

export default Ember.Component.extend({
  updateArticleForm: false,
  actions:{
    showUpdateArticleForm(){
      this.set('updateArticleForm', true);
    },
    updateArticle(article){
      var params = {
        author: this.get('author'),
        title: this.get('title'),
        image: this.get('image'),
        text: this.get('text'),
        preview: this.get('preview'),
        date: this.get('date')
      };
      this.set('updateArticleForm', false);
      this.sendAction('updateArticle2', article, params);
    }
  }
});
