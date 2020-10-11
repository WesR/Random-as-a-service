in# Random as a service
Hosted at [random.wesring.com](https://random.wesring.com)

## About
Have you ever needed some random but no access to /dev/random? Well I have the solution for you! With the power of **Rust**, **Microservices** and **Edge Computing** you can generate your passwords anywhere with an internet connection!!!1! [1]\
Get a response in the format we all know and love (JSON) by default, or a shot of that sweet pure random-y goodness with literally any other Content-Type header!\
Want more then the default 32 characters of randomness brewed just for you? We have a solution for that! If you feel like practicing REST, simply use the "size" header to get as many characters as you need! If you're a geezer, use url params. Hell, you don't even have to format them. It just works! https://random.wesring.com/PLZGIVEsize80 .\
With 99.9999999 (THATS NINE 9'S) of guaranteed uptime [2], you can count on us for your randomness needs. That’s a level of availability most corporations can only dream of! You now have access to an unlimited amount [3] of randomness. Kiss  /dev/random goodbye!\
Still unsure? Worried about the security of the random-ness? Don't! We use **Military Grade Encryption** [4] to ensure that no one else on the line can view your bits.


## tl;dr
This is a cloudflare worker I made to test how their worker system works, along with usage of wasm and Rust. by default it returns in the following schema: \
`{"value":"KKpR1al9JZTFOHXeGrb9yUuhppiunC0O"}` . Feel free to use it for whatever you want. HTTPS only. use the "size" header to change the size, and use any Content-Type header other then "application/json" to get a raw output. It also accepts a "size" url param. https://random.wesring.com/?size=100 . Since I'm using the cloudflare worker free tier, the endpoint is capped at 100,000 calls per day, with a maximum compute time of 10ms. Because of that 10ms time cap, very large responses timeout. BSD licensed.

## Curl
Example curl: 
``` bash
curl https://random.wesring.com -H "size : 1000"
curl https://random.wesring.com -H "size : 10" -H "Content-Type : application/plain"
```

[1] randomness not proven \
[2] not guaranteed \
[3] free tier limited to 100,000 calls per day. Void where prohibited \
[4] literally whatever TLS you call it with