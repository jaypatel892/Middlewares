class ExpressError extends  Error{
    constructor(status,messgae){
        this.status = status;
        this.message = this.message;

    }
}

module.exports = ExpressError;