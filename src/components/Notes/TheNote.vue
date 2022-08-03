<template>
	<div class="card mb-5">
		<header class="card-header has-background-primary-dark">
			<p class="card-header-title has-text-white">{{ note.title }}</p>
			<button class="card-header-icon" aria-label="more options">
				<span class="icon">
					<i class="fas fa-angle-down" aria-hidden="true"></i>
				</span>
			</button>
		</header>
		<div class="card-content">
			<div class="content">
				{{ note.content }}
				<div
					class="has-text-right is-size-7 has-text-grey-light is-family-monospace"
				>
					{{ characterLength }}
				</div>
			</div>
		</div>
		<footer class="card-footer">
			<RouterLink
				:to="`/editNote/${note.id}`"
				class="card-footer-item has-text-primary-dark"
				>Editar</RouterLink
			>
			<a
				@click.prevent="storeNotes.deleteNote(note.id)"
				href="#"
				class="card-footer-item has-text-danger"
				>Apagar</a
			>
		</footer>
	</div>
</template>

<script setup>
import { computed } from 'vue';
import { useStoreNotes } from '@/stores/storeNotes';

// STORE
const storeNotes = useStoreNotes();

const props = defineProps({
	note: {
		type: Object,
		required: true,
	},
});

// Contador de caracteres
const characterLength = computed(() => {
	const wordsCounter = props.note.content.length;
	const chacacterIsPlural = wordsCounter > 1 ? 'caracteres' : 'caracter';
	return `${wordsCounter} ${chacacterIsPlural}`;
});
</script>
