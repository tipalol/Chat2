Vue.component('modal', {
  template: '#modal-template',
  methods: {

  }		
})
var app = new Vue({
	el: '#app',
	data: {
		showModal: false,
		modalText: 'Название заметки',
		cleanTip: 'Удалить все заметки',
		notes: [
			
		]
	},
	mounted: function() {
		console.log('App running')
		if (localStorage['notes'] == undefined) {
			console.log('First running')
			localStorage['notes'] = []
		} else {
			this.notes = JSON.parse(localStorage['notes'])
			console.log('Notes loaded')
		}
	},
	methods: {
		createNote: function() {
			console.log('Creating new note')
			showModal = true
		},
		close: function() {
			this.notes.push({
				name: this.modalText.split(' ')[0],
				text: this.modalText
			})
			localStorage['notes'] = JSON.stringify(this.notes)
			this.showModal = false
			console.log('closed')
			this.modalText = ''
		},
		clean: function() {
			this.notes = []
			localStorage['notes'] = JSON.stringify(this.notes)
			console.log('Notes cleaned');
		}
	}
})