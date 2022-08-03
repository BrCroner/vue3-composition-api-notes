<template>
	<div class="edit-note container is-max-desktop p-4">
		<div class="header">
			<h1
				class="has-text-centered has-text-grey-darker is-family-monospace is-uppercase has-text-weight-semibold is-size-6 my-4"
			>
				ID da Nota:
				<br /><span class="has-text-primary-dark">{{ $route.params.id }}</span>
			</h1>
		</div>

		<AddEditNote v-model="nodeContent" ref="addEditNoteRef">
			<template #buttons>
				<div class="field is-grouped is-grouped-right">
					<div class="control">
						<button
							class="button is-link has-background-success-light has-text-primary-dark"
						>
							Salvar
						</button>
					</div>
				</div>
			</template>
		</AddEditNote>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import AddEditNote from '@/components/Notes/AddEditNote.vue';

const nodeContent = ref('');
</script>
