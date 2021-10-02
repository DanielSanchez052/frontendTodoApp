import { fetchWithoutToken } from "./fetch.js"

export const serviceGroups = {
    load: async () => {
        let dataResponse = []
        try {
            const res = await fetchWithoutToken("task/tasks/", {})
            dataResponse = await res.json()
        } catch (e) {
            console.log(e)
        }
        return dataResponse
    },
    add: async (task) => {
        let dataResponse = []
        try{
            const res = await fetchWithoutToken("task/tasks/", {task})
            dataResponse = await res.json()
        }catch (e){
            console.log(e)
        }
        return dataResponse
    }
};
