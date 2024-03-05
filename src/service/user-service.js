import { prismaClient } from "../application/database.js";
import { ResponseError } from "../error/response-error.js";
import { getUserValidation, loginUserValidation, registerUserValidation, updateUserValidation } from "../validation/user-validation.js"
import { validate } from "../validation/validation.js"
import bcrypt from "bcrypt"
import { v4 as uuid } from "uuid"

const register = async (request) => {
    const user = validate(registerUserValidation, request);

    const countUser = await prismaClient.user.count({
        where: {
            email: user.email,
        },
    });

    if (countUser === 1) {
        throw new ResponseError(400, "Email already registered");
    }

    user.password = await bcrypt.hash(user.password, 10);

    return prismaClient.user.create({
        data: user,
        select: {
            id: true,
            email: true,
            nama: true,
            no_telp: true,
        },
    })

}

const login = async (request) => {
    const loginRequest = validate(loginUserValidation, request);

    const user = await prismaClient.user.findUnique({
        where: {
            email: loginRequest.email,
        },
        select: {
            id: true,
            email: true,
            password: true,
        },
    });

    if (!user) {
        throw new ResponseError(401, "Email or password wrong");
    }

    const isPasswordValid = await bcrypt.compare(loginRequest.password, user.password);

    if (!isPasswordValid) {
        throw new ResponseError(401, "Email or password wrong");
    }

    const token = uuid().toString();

    return prismaClient.user.update({
        data: {
            token: token,
        },
        where: {
            id: user.id,
        },
        select: {
            token: true,
        },
    })
}

const get = async (id) => {
    id = validate(getUserValidation, id);
    const user = prismaClient.user.findUnique({
        where: {
            id: id,
        },
        select: {
            id: true,
            email: true,
            nama: true,
            no_telp: true,
            Roles: {
                select: {
                    id: true,
                    role: true,
                }
            },
            penyelenggara_layanan: {
                select: {
                    id: true,
                    nama: true,
                }
            },
        },
    });


    if (!user) {
        throw new ResponseError(404, "User not found");
    }

    return user;

}

const update = async (request) => {
    const user = validate(updateUserValidation, request);

    const totalUser = await prismaClient.user.count({
        where: {
            id: user.id,
        },
    });


    if (totalUser !== 1) {
        throw new ResponseError(404, "User not found");
    }

    const data = {};

    if (user.email) {
        const countUser = await prismaClient.user.count({
            where: {
                email: user.email,
                id: {
                    not: user.id,
                },
            },
        });

        if (countUser === 1) {
            throw new ResponseError(400, "Email already registered");
        }

        data.email = user.email;
    }
    if (user.nama) {
        data.nama = user.nama;
    }
    if (user.password) {
        data.password = await bcrypt.hash(user.password, 10);
    }
    if (user.no_telp) {
        data.no_telp = user.no_telp;
    }
    if (user.role_id) {
        data.role_id = user.role_id;
    }
    if (user.penyelenggara_layanan_id) {
        data.penyelenggara_layanan_id = user.penyelenggara_layanan_id;
    }

    return prismaClient.user.update({
        where: {
            id: user.id,
        },
        data: data,
        select: {
            id: true,
            email: true,
            nama: true,
            no_telp: true,
            Roles: {
                select: {
                    id: true,
                    role: true,
                }
            },
            penyelenggara_layanan: {
                select: {
                    id: true,
                    nama: true,
                }
            },
        },
    });
}

const logout = async (id) => {
    id = validate(getUserValidation, id);

    const user = await prismaClient.user.findUnique({
        where: {
            id: id,
        },
    });

    if (!user) {
        throw new ResponseError(404, "User not found");
    }
    return prismaClient.user.update({
        where: {
            id: id,
        },
        data: {
            token: null,
        },
        select: {
            email: true,
        }
    });
}

export default {
    register,
    login,
    get,
    update,
    logout
};