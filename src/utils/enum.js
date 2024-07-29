export const HttpStatusCode = {
    OK: 200,
    ACCEPTED: 202,
    BAD_REQUEST: 400,
    NOT_FOUND: 404,
    INTERNAL_SERVER: 500,
    CREATED: 201,
    UNAUTHORIZATION: 401,
    CONFLICT: 409,
    FORBIDDEN: 403,
    REDIRECT: 302,
    TO_MANY_REQUEST: 429,
    Service_Unavailable: 503,
}

export const HttpStatusMessage = {
    SUCCESS_REGISTER: "berhasil registrasi",
    SUCCESS_CREATE_USER_CREDENTIAL: "berhasil membuat credential user",
    SUCCESS_FOUND_USER: "berhasil menemukan data user",
    SUCCESS_UPDATE_USER: "berhasil memperbarui data user",

    // Error
    VALIDATION_ERROR: "data tidak valid",
    NOT_FOUND_ERROR: "data tidak ditemukan",
    DUPLICATE_ERROR: "data duplikat tidak bisa digunakan",
}
