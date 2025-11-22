import { z } from 'zod';


// eslint-disable-next-line @typescript-eslint/no-unused-vars
const payloadUserSchema = z.object({
    id: z.string(),
    name: z.string(),
});

export type PayloadUser = z.infer<typeof payloadUserSchema>;