import { prismaClient } from "../application/database.js";
import { ResponseError } from "../error/response-error.js";
import { getUserValidation, loginUserValidation, registerUserValidation } from "../validation/user-validation.js"
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

export default {
    register,
    login,
    get
};