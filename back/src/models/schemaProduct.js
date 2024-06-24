import { z } from "zod";

const Product = z.object({
    id: z.number(),
    title: z.string(),
    price: z.number(),
    description: z.string(),
    category: z.string(),
    image: z.string(),
    stock: z.number()
})


export default Product