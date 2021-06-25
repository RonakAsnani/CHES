const articleReducer = (articles = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...articles, action.payload];
        case 'UPDATE':
            return articles.map((article) => article._id === action.payload ? action.payload : article);
        default:
            return articles;
    }
}

export default articleReducer;