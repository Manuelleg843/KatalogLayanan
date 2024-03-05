import {
    createPenyelenggaraLayananValidation,
    getPenyelenggaraLayananValidation,
    searchPenyelenggaraLayananValidation,
    updatePenyelenggaraLayananValidation
} from "../validation/penyelenggara-layanan-validation.js";
import { validate } from "../validation/validation.js"
import { ResponseError } from "../error/response-error.js";
import { prismaClient } from "../application/database.js";

const create = async (user, request) => {
    const penyelenggara_layanan = validate(createPenyelenggaraLayananValidation, request);

    if (user.role_id !== 2) {
        throw new ResponseError(403, "Forbidden");
    }

    const countPenyelenggaraLayanan = await prismaClient.PenyelenggaraLayanan.count({
        where: {
            nama: penyelenggara_layanan.nama,
        },
    });

    if (countPenyelenggaraLayanan === 1) {
        throw new ResponseError(400, "Nama Penyelenggara Layanan already exists");
    }

    return await prismaClient.PenyelenggaraLayanan.create({
        data: penyelenggara_layanan,
        select: {
            id: true,
            nama: true,
            deskripsi: true,
            email: true,
            telp: true,
        },
    });
}

const get = async (id) => {
    id = validate(getPenyelenggaraLayananValidation, id);
    const totalPenyelenggaraLayanan = await prismaClient.PenyelenggaraLayanan.count({
        where: {
            id: id,
        },
    });
    const penyelenggara_layanan = prismaClient.PenyelenggaraLayanan.findUnique({
        where: {
            id: id,
        },
        select: {
            id: true,
            nama: true,
            deskripsi: true,
            email: true,
            telp: true,
        },
    });

    if (totalPenyelenggaraLayanan !== 1) {
        throw new ResponseError(404, "Penyelenggara Layanan not found");
    }

    return penyelenggara_layanan;
}

const update = async (user, request) => {
    const penyelenggara_layanan = validate(updatePenyelenggaraLayananValidation, request);

    if (user.role_id !== 2 && user.role_id !== 1) {
        if ((user.role_id === 1 && user.penyelenggara_layanan_id !== penyelenggara_layanan.id) || user.role_id === 0) {
            throw new ResponseError(403, "Forbidden");
        }
    }

    const totalPenyelenggaraLayanan = await prismaClient.PenyelenggaraLayanan.count({
        where: {
            id: penyelenggara_layanan.id,
        },
    });

    if (totalPenyelenggaraLayanan !== 1) {
        throw new ResponseError(404, "Penyelenggara Layanan not found");
    }

    const data = {};

    if (penyelenggara_layanan.nama) {
        const countPenyelenggaraLayanan = await prismaClient.PenyelenggaraLayanan.count({
            where: {
                nama: penyelenggara_layanan.nama,
                id: {
                    not: penyelenggara_layanan.id,
                },
            },
        });

        if (countPenyelenggaraLayanan === 1) {
            throw new ResponseError(400, "Nama Penyelenggara Layanan already exists");
        }

        data.nama = penyelenggara_layanan.nama;
    }

    if (penyelenggara_layanan.email) {
        const countPenyelenggaraLayanan = await prismaClient.PenyelenggaraLayanan.count({
            where: {
                email: penyelenggara_layanan.email,
                id: {
                    not: penyelenggara_layanan.id,
                },
            },
        });

        if (countPenyelenggaraLayanan === 1) {
            throw new ResponseError(400, "Email already registered");
        }

        data.email = penyelenggara_layanan.email;
    }

    if (penyelenggara_layanan.telp) {
        data.telp = penyelenggara_layanan.telp;
    }

    if (penyelenggara_layanan.deskripsi) {
        data.deskripsi = penyelenggara_layanan.deskripsi;
    }

    return await prismaClient.PenyelenggaraLayanan.update({
        data: data,
        where: {
            id: penyelenggara_layanan.id,
        },
        select: {
            id: true,
            nama: true,
            deskripsi: true,
            email: true,
            telp: true,
        },
    });
}

const remove = async (user, id) => {
    id = validate(getPenyelenggaraLayananValidation, id);

    if (user.role_id !== 2 && user.role_id !== 1) {
        if ((user.role_id === 1 && user.penyelenggara_layanan_id !== id) || user.role_id === 0) {
            throw new ResponseError(403, "Forbidden");
        }
    }

    const totalPenyelenggaraLayanan = await prismaClient.PenyelenggaraLayanan.count({
        where: {
            id: id,
        },
    });

    if (totalPenyelenggaraLayanan !== 1) {
        throw new ResponseError(404, "Penyelenggara Layanan not found");
    }

    return await prismaClient.PenyelenggaraLayanan.delete({
        where: {
            id: id,
        },
    });
}

const search = async (request) => {
    request = validate(searchPenyelenggaraLayananValidation, request);

    const filter = [];

    if (request.nama) {
        filter.push({
            nama: {
                contains: request.nama,
            }
        });
    }

    const skip = (request.page - 1) * request.size;
    const penyelenggara_layanan = await prismaClient.PenyelenggaraLayanan.findMany({
        where: {
            AND: filter,
        },
        take: request.size,
        skip: skip,
    });

    const totalItem = await prismaClient.PenyelenggaraLayanan.count({
        where: {
            AND: filter,
        }
    });

    return {
        data: penyelenggara_layanan,
        paging: {
            page: request.page,
            total_item: totalItem,
            total_page: Math.ceil(totalItem / request.size),
        },
    };
}

export default {
    create,
    get,
    update,
    remove,
    search
}