import { prismaClient } from "../src/application/database";
import bcrypt from "bcrypt";

const removeTestUser = async () => {
    await prismaClient.user.deleteMany({
        where: {
            email: 'test@stis.ac.id'
        }
    })
}

const createTestUser = async () => {
    await prismaClient.user.create({
        data: {
            email: 'test@stis.ac.id',
            nama: 'test name',
            no_telp: '085123456789',
            password: await bcrypt.hash('passwordtest', 10),
            token: 'testtoken'
        }
    })
}

export {
    removeTestUser,
    createTestUser
}