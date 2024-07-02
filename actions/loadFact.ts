"use server";

export async function loadFact() {
  const gqlApiUrl = process.env.GRAPHQL_API_URL;

  if (!gqlApiUrl) {
    throw new Error("Missing Env")
  }

	const response = await fetch(gqlApiUrl, {
		method: "POST",
		body: JSON.stringify({
			query: "query { getFact { value } }",
		}),
		headers: {
			"Content-Type": "application/json",
			"x-apollo-operation-name": "getFact",
		},
	});

	const json = (await response.json()) as {
		data: { getFact: { value: string } };
	};

	return json.data.getFact.value;
}
