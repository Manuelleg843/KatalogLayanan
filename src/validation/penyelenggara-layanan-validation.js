import Joi from "joi";

const createPenyelenggaraLayananValidation = Joi.object({
    nama: Joi.string().max(100).required(),
    deskripsi: Joi.string().optional(),
    email: Joi.string().max(100).optional(),
    telp: Joi.string().max(100).optional(),
});

const getPenyelenggaraLayananValidation = Joi.number().positive().required();

const updatePenyelenggaraLayananValidation = Joi.object({
    id: Joi.number().required(),
    nama: Joi.string().max(100).optional(),
    deskripsi: Joi.string().optional(),
    email: Joi.string().max(100).optional(),
    telp: Joi.string().max(100).optional(),
}).or('nama', 'deskripsi', 'email', 'telp');

const searchPenyelenggaraLayananValidation = Joi.object({
    page: Joi.number().min(1).positive().default(1),
    size: Joi.number().min(1).positive().max(100).default(10),
    nama: Joi.string().max(100).optional(),
});

export {
    createPenyelenggaraLayananValidation,
    getPenyelenggaraLayananValidation,
    updatePenyelenggaraLayananValidation,
    searchPenyelenggaraLayananValidation
};