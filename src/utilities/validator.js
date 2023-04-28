export function validateRequired(value) {
    if (value.length === 0) {
        // callback(false);
        return "This field is required";
    }
    // callback(true);
    return null;
}

export function validatePaswdMatch(value1, value2) {
    if (value1 !== value2) {
        return "Password must match";
    }
    return null;
}

export function handleValidations(validations) {
    if (validations.every((v) => v === null)) {
        return true;
    } else {
        return false;
    }
}