import type { User } from "../interfaces/users";

export const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
];

export const statusOptions = [
  { value: "active", label: "Active" },
  { value: "inactive", label: "Inactive" },
  { value: "pending", label: "Pending" },
];

export const users: User[] = [
  {
    id: 1,
    name: "John Doe",
    email: "John@gmail.com",
    imageUrl: "https://randomuser.me/api/portraits/men/1.jpg",
    LastName: "Doe",
    age: 30,
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@gmail.com",
    imageUrl: "https://randomuser.me/api/portraits/women/1.jpg",
    age: 28,
    LastName: "Smith",
  },
  {
    id: 3,
    name: "Bob Johnson",
    email: "bob@gmail.com",
    imageUrl: "https://randomuser.me/api/portraits/men/2.jpg",
    age: 35,
    LastName: "Johnson",
  },
];