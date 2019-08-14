const listingFilter = require('./listing-filter');
const {fields, data: listings} = require('./listings.json');

module.exports = ({query}, res) => res
    .send({
        fields,
        data: listingFilter(listings, query), 
    });
