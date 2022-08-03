import { defineStore } from 'pinia';
import { v4 as uuidv4 } from 'uuid';

export const useStoreNotes = defineStore('storeNotes', {
	state: () => {
		return {
			notes: [
				{
					id: 'id3',
					title: 'Terceira nota',
					content:
						'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi vero	expedita ea fugit sit reprehenderit tempora atque modi enim facere autem, deleniti aspernatur corrupti? Natus voluptate velit incidunt eveniet sapiente.',
				},
				{
					id: 'id2',
					title: 'Segunda nota',
					content:
						'Maecenas et ante vel tortor pellentesque rutrum. Pellentesque sit amet risus semper, suscipit ex ut, ultricies orci. Phasellus vestibulum ante non enim fringilla, in euismod sem eleifend. Aliquam elementum, erat eu dignissim tristique, augue nunc sodales augue, dictum tristique massa dui ut tellus. Cras ut tincidunt nunc. Praesent pretium tempus leo, imperdiet ultrices nibh interdum non. Duis nec arcu sem. Morbi semper erat sed venenatis feugiat. Ut congue mollis felis sit amet blandit. Pellentesque in felis a sem sodales laoreet et vel nulla. Sed tempus ornare ligula, eu posuere justo finibus sed. Proin faucibus lorem vitae nulla gravida, a blandit leo convallis.',
				},
				{
					id: 'id1',
					title: 'Primeira nota',
					content:
						'Ut maximus metus non diam suscipit maximus. Vivamus tempus, ligula et bibendum pharetra, tellus magna aliquet tellus, non ultricies diam magna eget risus. Proin a augue dapibus libero ultrices vehicula vitae varius nibh. Mauris porta eget nunc in accumsan. Ut a velit non lorem pretium scelerisque eget vitae felis. Cras porttitor ante vel ex lacinia, vel scelerisque lorem imperdiet. Etiam euismod sit amet neque ut laoreet. Aenean egestas interdum venenatis. In sed venenatis justo. Morbi luctus libero rhoncus tempus sodales. Maecenas convallis, justo quis elementum congue, nibh metus eleifend magna, nec vulputate libero lectus quis erat. Nam euismod nulla nec lorem aliquam, a congue metus scelerisque. Nam ut nisl tincidunt, vulputate tortor ac, finibus massa. Sed vel sodales justo.',
				},
			],
		};
	},
	actions: {
		addNote(newNoteContent) {
			const noteId = uuidv4();
			const note = {
				id: noteId,
				title: newNoteContent.title,
				content: newNoteContent.content,
			};
			this.notes.unshift(note);
		},
		deleteNote(id) {
			this.notes = this.notes.filter((note) => note.id !== id);
		},
	},
});
