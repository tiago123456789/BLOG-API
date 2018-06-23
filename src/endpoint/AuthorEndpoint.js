
export default class AuthorEndpoint {

    constructor(bo) {
        this._bo = bo;
        this.findAll = this.findAll.bind(this);
    }

    findAll(request, response, next) {
        try {
            response.status(200).json(this._bo.findAll());
        } catch(e) {
            next(e);
        }
    }
}