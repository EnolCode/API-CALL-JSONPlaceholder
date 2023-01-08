// import JsonHolderRepository from "./jsonHolderApi/JsonHolderRepository";
import JsonHolderRepository from "./jsonHolderApi/JsonHolderRepository"

export default class ApiRepository {

    api;

    constructor(apiToCharge) {
        this.api = apiToCharge
        return new JsonHolderRepository
    }
}

