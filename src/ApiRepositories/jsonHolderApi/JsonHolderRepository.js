import ApiPayload from "../payloads/ApiPayload"

export default class JsonHolderRepository {

    uri = "https://jsonplaceholder.typicode.com/users"

    constructor() {
        
    }

    async getAll() {
        const response = await fetch(this.uri)
        const json = await response.json()
        
        let characters = []
        
        for (const character of json) {
            const characterToAdd = new ApiPayload(character.id, character.name, character.username)
            characters.push(characterToAdd)    
        }

        return characters
    }

}