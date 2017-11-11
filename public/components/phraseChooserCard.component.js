angular.module('App')

.component('phraseChooserCard', {

  bindings: {
    current: '<',
    next: '<',
    code: '<',
    phrases: '<',
    nextClick: '<',
    phraseClick: '<'

  },

  controller: function() {


},

  templateUrl: './templates/phrase-chooser-card.html'

})
