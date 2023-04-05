export const myService = {
    hello(name) {
        return `Hello ${name}!`;
    },
    store(id) {
        throw new Error("Not implemented");
        return {
            id: 1,
            name: "Store Name",
            address: "123 Main St",
            city: "City",
            state: "State",
            zip: "12345",
            phone: "123-456-7890",
            email: "",
            stock: [
                {
                    id: 1,
                    name: "Product Name",
                    price: 1.99,
                    quantity: 10,
                },
                {
                    id: 2,
                    name: "Product Name 2",
                    price: 2.99,
                    quantity: 20,
                },
            ],
        };
    },
};
