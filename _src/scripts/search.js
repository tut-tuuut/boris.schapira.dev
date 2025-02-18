/* global instantsearch,algoliasearch */
var search = instantsearch({
  indexName: document.getElementById('algolia-index-name').innerHTML,
  searchClient: algoliasearch(
    document.getElementById('algolia-app-id').innerHTML,
    document.getElementById('algolia-api-key').innerHTML
  )
});

search.addWidgets([
  instantsearch.widgets.searchBox({
    container: '#search-box',
    placeholder: 'Recherche',
    autofocus: false,
    poweredBy: true,
    reset: true,
    loadingIndicator: false
  }),

  instantsearch.widgets.refinementList({
    container: '#refinement-list',
    attribute: 'categories'
  }),

  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      empty: 'Aucun résultat&nbsp;!',
      item: document.getElementById('hit-template').innerHTML
    }
  }),

  instantsearch.widgets.pagination({
    container: '#pagination-container',
    maxPages: 20,
    scrollTo: false,
    showFirstLast: false
  })
]);
search.start();
