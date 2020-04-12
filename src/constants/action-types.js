export const createApiRequest = request => {
    return {
        pending: `${request}_PENDING`,
        success: `${request}_SUCCESS`,
        error: `${request}_ERROR`
    }
}

export const API_REQUEST = "API_REQUEST";
export const FETCH_HEROES_REQUEST = "FETCH_HEROES_REQUEST";
export const SEARCH_HEROES_REQUEST = "SEARCH_HEROES_REQUEST";
