'use strict';

var TrelloResource = require('../TrelloResource');
var trelloMethod = TrelloResource.method;

module.exports = TrelloResource.extend({

    path: 'boards',
    includeBasic: [
        'create', 'search', 'searchField', 'update', 'del'
    ],

    searchCards: trelloMethod({
        method: 'GET',
        path: '/{id}/cards',
        urlParams: ['id']
    }),

    searchCardsFilter: trelloMethod({
        method: 'GET',
        path: '/{id}/cards/{filter}',
        urlParams: ['id', 'filter']
    }),
    
    searchLists: trelloMethod({
        method: 'GET',
        path: '/{id}/lists',
        urlParams: ['id']
    }),
    
    searchListsFilter: trelloMethod({
        method: 'GET',
        path: '/{id}/lists/{filter}',
        urlParams: ['id', 'filter']
    }),
    
    searchLables: trelloMethod({
        method: 'GET',
        path: '/{id}/lables',
        urlParams: ['id']
    }),
});
