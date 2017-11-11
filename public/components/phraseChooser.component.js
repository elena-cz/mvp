angular.module('App')

.controller('phraseChooserController', function() {

  console.log('In phraseChooserController');

  // this.$onInit = function () {
    

    
    this.init = function() {
      console.log('this.characters in phrasecontroller', this.characters);
    };

    this.currentChar = "A";
    // if (this.characters) {
    //   this.code = this.characters[this.currentChar].code;
    //   this.phrases = this.characters[this.currentChar].phrases;
    //   this.phrases = this.characters[this.currentChar].phrases;
    // } else {
    //   this.code = 'empty';
    //   this.phrases = 'empty';
    //   this.phrases = 'empty';
    // }
  // };


})


.component('phraseChooser', {

  bindings: {
    characters: '<'
  },

  controller: 'phraseChooserController',

  templateUrl: './templates/phrase-chooser.html'

})
