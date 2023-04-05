type Product = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

type Store = {
  id: number;
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  email: string;
  website?: string;
  stock: Product[];
};

export const myService = {
  hello(name: string) {
    return `Hello ${name}!`;
  },
  store(id: number): Store {
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

export type MyService = typeof myService;
