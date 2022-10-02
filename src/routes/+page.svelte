<script>
	const getRandomTweet = async () => {
		var response = await fetch('https://fast-kanye-rest.vercel.app/ye');
		var result = await response.json();
		return result;
	};

	let yeezyTweet = getRandomTweet();
</script>

<svelte:head>
	<title>Jeen-Yuhs</title>
	<meta name="robots" content="noindex nofollow" />
	<meta name="Jeen-Yuhs, a Kanye West random tweet generator." />
	<html lang="en" />
</svelte:head>

<div class="flex h-screen w-full">
	<div
		class="bg-hero flex-1 bg-[url('https://media.timeout.com/images/101456795/1372/772/image.jpg')] bg-cover bg-center bg-no-repeat"
	>
		<div class="container mx-auto px-4">
			<div class="flex h-screen items-center justify-center">
				<div
					class="max-w-xl w-full rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-800"
				>
					<div class="flex justify-between">
						<div class="flex items-center">
							<img
								class="h-11 w-11 rounded-full"
								src="https://pbs.twimg.com/profile_images/1276461929934942210/cqNhNk6v_400x400.jpg"
								alt="blue globe which looks like clear sky"
							/>
							<div class="ml-1.5 text-sm leading-tight">
								<span class="block font-bold text-black dark:text-white">Ye</span>
								<span class="block font-normal text-gray-500 dark:text-gray-400">@kanyewest</span>
							</div>
						</div>
						<svg
							class="inline-block h-6 w-auto fill-current text-blue-400 dark:text-white"
							viewBox="0 0 24 24"
						>
							<g
								><path
									d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"
								/></g
							>
						</svg>
					</div>

					{#await yeezyTweet}
						<div role="status" class="max-w-sm animate-pulse mt-3 mb-3">
							<div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4" />
							<div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5" />
							<div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
							<div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5" />
							<div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5" />
							<div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]" />
							<span class="sr-only">Loading...</span>
						</div>
					{:then tweet}
						<p class="mt-3 mb-3 block text-xl leading-snug text-black dark:text-white">
							{tweet.ye_quote}
						</p>
					{:catch err}
						<h2>Error while loading the data</h2>
					{/await}

					<div class="my-1 border border-b-0 border-gray-200 dark:border-gray-600" />
					<button
						class=" bg-blue-900 pt-1 pb-1 pr-3 pl-3 rounded-full mt-3 text-black dark:text-white"
						on:click={() => (yeezyTweet = getRandomTweet())}>New Tweet</button
					>
				</div>
			</div>
		</div>
	</div>
</div>
