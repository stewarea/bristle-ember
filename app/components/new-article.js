import Ember from 'ember';

export default Ember.Component.extend({
  addNewArticle: false,
  actions:{
    articleFormShow(){
      this.set('addNewArticle', true);
    },
    saveArticle(){
      var newDate = new Date();
      var newnewDate = newDate.toString().substring(0, 11);
      var params = {
        author: this.get('author'),
        title: this.get('title'),
        image: this.get('image'),
        text: this.get('text'),
        preview: this.get('preview'),
        date: newnewDate

      };
      this.set('addNewArticle', false);
      this.sendAction('saveArticle2', params);
    }
  }
});
