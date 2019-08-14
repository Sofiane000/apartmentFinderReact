module.exports = (listings, { offset = 0, limit = 10, bedrooms, bathrooms, price }) => listings
    .filter(([listingBeds, listingPrice, listingBaths]) => (bedrooms == null || listingBeds >= bedrooms)
        && (bathrooms == null || listingBaths >= bathrooms)
        && (price == null || listingPrice <= price))
    .slice(offset, limit); 
