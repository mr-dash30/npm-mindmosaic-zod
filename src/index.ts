import z from 'zod';

export const signupSchema = z.object({
    username: z.string(),
    name: z.string().optional(),
    email: z.string(),
    password: z.string().min(8),
})

export const signinSchema = z.object({
    username: z.string(),
    email: z.string().optional(),
    password: z.string().min(8),
})

export const createPostSchema = z.object({
    title: z.string(),
    content: z.string(),
    published: z.boolean().optional(),
})


export const updatePostSchema = z.object({
    title: z.string().optional(),
    content: z.string().optional(),
    published: z.boolean().optional(),
    
})
 
export type SignupInput = z.infer<typeof signupSchema>;
export type SigninInput = z.infer<typeof signinSchema>;
export type CreatePostInput = z.infer<typeof createPostSchema>;
export type UpdatePostInput = z.infer<typeof updatePostSchema>;

// Path: Common/src/index.ts

