import { rpcClient } from "typed-rpc";
// Create a typed client:
const client = rpcClient("http://localhost:3000/api");
// Call a remote method:
// console.log(await client.hello("world"));
try {
    const store = await client.store(1);
    console.log("The store name is:", store.name);
}
catch (error) {
    console.error("** Error **", error);
}
console.log("done");
