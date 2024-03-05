import Joi from "joi";

const registerUserValidation = Joi.object({
    email: Joi.string().max(100).required(),
    nama: Joi.string().max(100).required(),
    no_telp: Joi.string().max(100).required(),
    password: Joi.string().max(100).required(),
});

const loginUserValidation = Joi.object({
    email: Joi.string().max(100).required(),
    password: Joi.string().max(100).required(),
});

const getUserValidation = Joi.number().required();

const updateUserValidation = Joi.object({
    id: Joi.number().optional(),
    email: Joi.string().max(100).optional(),
    nama: Joi.string().max(100).optional(),
    no_telp: Joi.string().max(100).optional(),
    password: Joi.string().max(100).optional(),
    role_id: Joi.number().optional(),
    penyelenggara_layanan_id: Joi.number().optional(),
}).or('email', 'nama', 'no_telp', 'password', 'role_id', 'penyelenggara_layanan_id');

export {
    registerUserValidation,
    loginUserValidation,
    getUserValidation,
    updateUserValidation
};