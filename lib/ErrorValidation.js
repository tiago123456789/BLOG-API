export default class ErrorValidation {

    static getErrorValidation(error) {
        const errorsValidation = error.errors;
        if (errorsValidation) {
            return Object.keys(errorsValidation).map(chave => errorsValidation[chave].message);
        }
    }
}