import Controller from '@ember/controller';
import { match, gte, and, not } from '@ember/object/computed';

export default Controller.extend({
  headerMessage: 'Please leave your email an a message to get in contact',
  emailAddress: '',
  textMessage: '',
  isValidEmail: match('emailAddress', /^.+@.+\..+$/),
  isMessageLongEnough: gte('textMessage.length', 5),
  isBothTrue: and('isValidEmail', 'isMessageLongEnough'),
  isValid: not('isBothTrue'),
  actions: {
    sendMessage: function() {
      let email = this.get('emailAddress');
      let message = this.get('textMessage');

      alert(
        `Sending message in progress with the following email: ${email} and the message: ${message}`
      );
      this.set('responseMessage', 'We got your message and we’ll get in touch soon');
      this.set('emailAddress', '');
      this.set('textMessage', '');
    }
  }
});
