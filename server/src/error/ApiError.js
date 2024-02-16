class ApiError extends Error{
    status;
    errors;

    constructor(status, message, errors = []){
        super(message);
        this.status = status;
        this.errors = errors;
    }
    static UnauthorizedError() {
        return new ApiError(401, 'Пользователь не авторизован')
    }
    static badRequest(message, errors = []) {
        return new ApiError(404, message, errors)
    }
}
module.exports = ApiError