<template>
	<div class="card has-background-primary-dark p-4 mb-5">
		<div class="field">
			<div class="field">
				<label class="label has-text-white is-family-primary">Título</label>
				<div class="control">
					<input
						v-model="modelValue.title"
						@input="$emit('update: modelValue.title', modelValue.title)"
						class="input"
						type="text"
						placeholder="Adicione um título"
						ref="newNoteRef"
					/>
				</div>
			</div>
			<div class="control">
				<label class="label has-text-white is-family-primary">Texto</label>
				<textarea
					v-model="modelValue.content"
					@input="$emit('update: modelValue.content', modelValue.content)"
					class="textarea"
					placeholder="Adicione uma nota"
				/>
			</div>
		</div>

		<div class="field is-grouped is-grouped-right">
			<div class="control">
				<slot name="buttons" />
			</div>
		</div>
	</div>
</template>

<script setup>
const props = defineProps({
	modelValue: {
		type: String,
		required: true,
	},
});

const emit = defineEmits([
	'update: modelValue.title',
	'update: modelValue.content',
]);
</script>
