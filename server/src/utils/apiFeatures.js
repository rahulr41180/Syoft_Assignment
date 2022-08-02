
class ApiFeatures {
    
    constructor(query, queryStr) {
        this.query = query;
        this.queryStr = queryStr;
    }

    search() {
        const keyword = this.queryStr.keyword ? {
            name : {
                $regex : this.queryStr.keyword, // Regular Expretion

                $options : "i", // Case Insensitive
            }
        } : {};
        this.query = this.query.find({...keyword});
        return this;
    }

    filter() {
        const queryCopy = {...this.queryStr}; 
    
        const removeFields = ["keyword","page","limit"];
        removeFields.forEach(element => delete queryCopy[element])
        console.log('queryCopy:', queryCopy)
        
        let queryString = JSON.stringify(queryCopy);
        queryString = queryString.replace(/\b(gt|gte|lt|lte)\b/g, key => `$${key}`); // Regular Expression
        this.query = this.query.find(JSON.parse(queryString))
         
        console.log('queryString:', queryString)
        // console.log('this.query:', this.query)
        return this;

    }
    pagination(resultPerPage) {

        const currentPage = Number(this.queryStr.page) || 1;

        const skip = resultPerPage * (currentPage-1)

        this.query = this.query.limit(resultPerPage).skip(skip);

        return this;
    }


}

module.exports = ApiFeatures;