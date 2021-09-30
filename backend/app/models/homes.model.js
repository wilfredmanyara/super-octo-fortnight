
module.exports = mongoose => {
    const schema = 
        mongoose.Schema(
            {
                saleType: String,
                soldDate: String,
                propertyType: String,
                address: String,
                city: String,
                stateOrProvince: String,
                zipOrPostalCode: String,
                price: String,
                beds: String,
                baths: String,
                location: String,
                squareFeet: String,
                lotSize: String,
                yearBuilt: String,
                daysOnMarket: String,
                pricePerSquareFoot: String,
                hoaPerMonth: String,
                status: String,
                nextOpenHouseStartTime: String,
                nextOpenHouseEndTime: String,
                url: String,
                source: String,
                mlsNumber: String,
                favorite: String,
                interested: String,
                latitude: String,
                longtitude: String
            },
            {
                timestamps: true
            }
        );

        schema.method("toJSON", function() {
            const { __v, _id, ...object } = this.toObject();
            object.id = _id;
            return object;
        })

    const Homes = mongoose.model("Homes", schema);
    return Homes;
}