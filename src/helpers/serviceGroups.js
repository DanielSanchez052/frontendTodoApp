import { fetchWithoutToken } from "./fetch.js"

export const serviceGroups = {
    load: async () => {
        let dataResponse = []
        try {
            const res = await fetchWithoutToken("task/group_task/", {})
            dataResponse = await res.json()
        } catch (e) {
            console.log(e)
        }
        return dataResponse
    },
    add: async (group) => {
        let dataResponse = []
        try{
            const res = await fetchWithoutToken("task/group_task/", {group})
            dataResponse = await res.json()
        }catch (e){
            console.log(e)
        }
        return dataResponse
    }
};
