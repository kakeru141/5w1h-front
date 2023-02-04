export type AuthForm = {
    email: string
    password: string
}
export type EditedProject = {
    id: number
    projectName: string;
    when?: string | null;
    where?: string | null;
    who?: string | null;
    what?: string | null;
    why?: string | null;
    how?: string | null;
}