<template>
	<div class="notes container is-max-desktop p-4">
		<h1
			class="has-text-centered is-family-monospace is-uppercase has-text-weight-semibold is-size-5 my-4"
		>
			Bloco de Notas
		</h1>

		<AddEditNote v-model="newNote">
			<template #buttons>
				<div class="field is-grouped is-grouped-right">
					<div class="control">
						<button
							@click="addNote"
							:disabled="!newNote.title || !newNote.content"
							class="button is-link has-background-primary has-text-black"
						>
							Adicionar Nota
						</button>
					</div>
				</div>
			</template>
		</AddEditNote>

		<TheNote v-for="note in storeNotes.notes" :key="note.id" :note="note" />
	</div>
</template>

<script setup>
import { ref } from 'vue';

import { useStoreNotes } from '@/stores/storeNotes';
import AddEditNote from '@/components/Notes/AddEditNote.vue';
import TheNote from '@/components/Notes/TheNote.vue';

// STORE
const storeNotes = useStoreNotes();

const newNote = ref({
	title: '',
	content: '',
});

const newNoteRef = ref(null);
const addEditNoteRef = ref(null);

const addNote = () => {
	storeNotes.addNote(newNote.value);
	newNote.value.title = '';
	newNote.value.content = '';
};
</script>
