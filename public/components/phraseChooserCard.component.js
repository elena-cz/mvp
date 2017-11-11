angular.module('App')

.component('phraseChooserCard', {

  bindings: {
    current: '<',
    next: '<',
    code: '<',
    phrases: '<',
    onClick: '<'

  },

  controller: function() {


    console.log(this.onClick);

    // this.handleClick = function(char) {
    //   console.log('handling click');
    //   this.onClick(char);
    // };

},

  templateUrl: './templates/phrase-chooser-card.html'

})
