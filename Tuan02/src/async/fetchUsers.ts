import { fetchUser } from "./fetchUser";

export const fetchUsers = async (ids: number[]) => {
    return Promise.all(ids.map((id) => fetchUser(id)));
}