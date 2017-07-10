var app = new Vue({
	el: '#app',
	data: {
		none_visible: false,
		reg_status: true,
		nick: ''
	},
	components: {
		chat: {
			template: '#template_chat',
			data: function() {
				return {
					messages_count: 0,
					messages: [{}],
					current_message_text: '',
					nick: app.nick,
				}
			},
			methods: {
				printMessage: function(_nick, _message) {
					var new_message = {
						nick: _nick,
						message: _message
					}
					this.messages.push(new_message);
					this.messages_count++
				},
				sendMessage: function() {
					this.printMessage(app.nick, this.current_message_text)
					this.current_message_text = ''
				},
				chars: function() {
						//alert(this.current_message_text.lenght)
						return this.current_message_text.lenght
				}
			},
			mounted: function() {
				this.printMessage('Администрация', 'Приветсвуем вас в нашем анонимном чате!')
				this.printMessage('Боб', 'Привет всем!')
				this.printMessage('Джон', 'Хай, как дела?')
				this.printMessage('Алли', 'Всем добрый вечер')
			}
		},
		reg_form: {
			template: '#reg-form-template',
			data: function() {
				return {
					nick: ''
				}
			},
			methods: {
				submitReg: function() {
					this.$emit('registration_confirmed', this.nick)
				}
			}
		}
	},
	methods: {
		enableChat: function(nick) {
			this.reg_status = false
			this.nick = nick
		}
	}
})