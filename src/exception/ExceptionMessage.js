export default {
    NOT_FOUND: "Register not found.",
    ALREADY_EXISTS: "Register already exists."

}

export function customMessage(entity, message) {
   `${entity} ${message.toLowerCase()}`;
}