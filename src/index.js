const { createRecipe, updateRecipeRating, listRecipes, fetchRecipe } = require('./recipeController');
const { hex2string, string2hex } = require('./utils');

const rollup_server = process.env.ROLLUP_HTTP_SERVER_URL;

async function handleAdvance(data) {
  const action = hex2string(data.payload);
  let response;

  if (action.startsWith("create")) {
    response = await createRecipe(data);
  } else if (action.startsWith("rate")) {
    response = await updateRecipeRating(data);
  }

  await fetch(rollup_server + "/notice", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ payload: string2hex(response) }),
  });
  return "accept";
}

async function handleInspect(data) {
  const action = hex2string(data.payload);
  let response;

  if (action === "list") {
    response = await listRecipes();
  } else {
    response = await fetchRecipe(data);
  }

  await fetch(rollup_server + "/report", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ payload: string2hex(response) }),
  });
  return "accept";
}

const handlers = {
  advance_state: handleAdvance,
  inspect_state: handleInspect,
};

(async () => {
  while (true) {
    const finish_req = await fetch(rollup_server + "/finish", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: "accept" }),
    });

    if (finish_req.status == 202) {
      console.log("No pending rollup request, trying again");
    } else {
      const rollup_req = await finish_req.json();
      const handler = handlers[rollup_req["request_type"]];
      await handler(rollup_req["data"]);
    }
  }
})();
