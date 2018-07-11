const elasticsearch = require('elasticsearch')
const client = new elasticsearch.Client({ host: { host : "localhost", port : 9200 } })

async function queryBookData (term) {
  return client.search({ 
    index : "library", type : "book", 
    body: {
      query: { 
        match: { text: { query: term } } 
      }
    } 
  })
}
