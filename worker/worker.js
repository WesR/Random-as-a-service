addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

/**
 * Fetch and log a request
 * @param {Request} request
 */
async function handleRequest(request) {
    const { gen_rand } = wasm_bindgen;
    await wasm_bindgen(wasm)

    if (request.headers.get("size") != null) {
      randomString = gen_rand(request.headers.get("size"))
    } else {
      if (request.url.includes("size")){
        chop = request.url.split("size");
        randomString = gen_rand(chop[chop.length - 1].replace(/\D/g,''));
      } else {
        randomString = gen_rand(32)
      }
    }

    if (request.headers.get("Content-Type") == "application/json" | request.headers.get("Content-Type") == null){
      return new Response('{"value":"' + randomString + '"}', {status: 200})
    } else {
      return new Response(randomString, {status: 200})
    }
}
