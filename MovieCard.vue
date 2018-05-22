<template>
    <div>
		<img width="100" :src='img' :alt='title'/>
		<h2>{{ title }}</h2>
	</div>
</template>

<script>
export default {
	name: 'card',
	components: {
		
	}
};
</script>

<style scoped>
	h2 {
		font-size: 20pt;
	}
</style> 