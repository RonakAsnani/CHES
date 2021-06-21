const articleReducer = (articles = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...articles, action.payload];
        default:
            return articles;
    }
}

export default articleReducer;