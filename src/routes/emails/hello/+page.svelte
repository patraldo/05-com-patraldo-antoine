<script>
	import { Button, Hr, Html, Text } from 'svelte-email';

	export let name = 'NewUser';
</script>

<Html lang="en">
	<Text>
		Hello, {name}!
	</Text>
	<Hr />
	<Button href="https://mypod.dev">Visit Mypod</Button>
</Html>
