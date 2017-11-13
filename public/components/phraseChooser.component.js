angular.module('App')


.component('phraseChooser', {

  bindings: {
    characters: '<',
    username: '<',
    userPrefs: '<'

  },

  controller: function(Characters) {

    this.currentChar = "A";
    this.selectedPhrase = '';
    
    this.saveAndNext = (char) => {
      if (this.selectedPhrase === '') {
        this.selectedPhrase = this.characters[this.currentChar].phrases[0];
      }
      Characters.savePhrase(this.username, this.currentChar, this.selectedPhrase);
      this.currentChar = char;
      this.selectedPhrase = '';

    };

    this.updatePhrase = ($event, phrase) => {
      this.selectedPhrase = phrase;
      console.log('phrase update to', this.selectedPhrase);
    };


},

  templateUrl: './templates/phrase-chooser.html'

})
