
const App = {
    data() {
        return {
            placeHolderString: 'Введите название заметки',
            title: 'Список заметок',
            inputValue: '',
            notes: []
        }
    },
    methods: {
        inputChangeHandker(event) {
            this.inputValue = event.target.value
        },
        addNewNote() {
            if (this.inputValue !== '') {
                this.notes.push(this.inputValue)
                this.inputValue = ''
            }
            
        },
        removeNote(idx) {
            this.notes.splice(idx, 1)
        }
    }
}

Vue.createApp(App).mount('#app')