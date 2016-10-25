import Ember from 'ember';

export default Ember.Component.extend({
  addNewArticle: false,
  actions:{
    articleFormShow(){
      this.set('addNewArticle', true);
    },
    saveArticle(){
      var params = {
        author: this.get('author'),
        title: this.get('title'),
        image: this.get('image'),
        text: this.get('text'),
      };
      this.set('addNewArticle', false);
      this.sendAction('saveArticle2', params);
    }
  }
});
