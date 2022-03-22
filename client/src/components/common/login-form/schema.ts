import * as z from 'zod';

export const schema = z.object({
  email: z.string().nonempty({ message: 'Required' }).email(),
  password: z.string().nonempty({ message: 'Required' }).min(8).max(24),
});
