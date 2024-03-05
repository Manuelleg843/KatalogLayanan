import { prismaClient } from "../src/application/database";
import bcrypt from "bcrypt";



const createTestUser = async () => {
    await prismaClient.user.create({
        data: {
            email: 'test@stis.ac.id',
            nama: 'test name',
            no_telp: '085123456789',
            password: await bcrypt.hash('passwordtest', 10),
            token: 'testtoken'
        }
    });
}

const createSecondTestUser = async () => {
    await prismaClient.user.create({
        data: {
            email: 'secontdtest@stis.ac.id',
            nama: 'second test name',
            no_telp: '085123456789',
            password: await bcrypt.hash('passwordtest', 10),
            token: 'secondtesttoken',
        }
    });
}

const createSuperAdminTestUser = async () => {
    await prismaClient.user.create({
        data: {
            email: 'superadmintest@stis.ac.id',
            nama: 'super admin test name',
            role_id: 2,
            no_telp: '085123456789',
            password: await bcrypt.hash('passwordtest', 10),
            token: 'superadmintesttoken'
        }
    });
}

const createPenyelenggaraLayanan = async () => {
    await prismaClient.PenyelenggaraLayanan.create({
        data: {
            nama: 'penyelenggara layanan name test',
            deskripsi: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
            email: 'unittest@stis.ac.id',
            telp: '085123456789'
        }
    });
}

const createManyPenyelenggaraLayanan = async () => {
    for (let i = 0; i < 15; i++) {
        await prismaClient.PenyelenggaraLayanan.create({
            data: {
                nama: `penyelenggara layanan name test ${i}`,
                deskripsi: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
                email: `unittest@stis${i}.ac.id`,
                telp: `08512345678${i}`
            }
        });
    }
}

const getTestUser = async () => {
    return await prismaClient.user.findFirst({
        where: {
            email: 'test@stis.ac.id'
        }
    });
}

const getUpdateTestUser = async () => {
    return await prismaClient.user.findFirst({
        where: {
            email: 'update@stis.ac.id'
        }
    });
}

const getPenyelenggaraLayanan = async () => {
    return await prismaClient.PenyelenggaraLayanan.findFirst({
        where: {
            nama: 'penyelenggara layanan name test'
        }
    })
}

const removeTestUser = async () => {
    await prismaClient.user.deleteMany({
        where: {
            email: 'test@stis.ac.id'
        }
    });
}

const removeSecondTestUser = async () => {
    await prismaClient.user.deleteMany({
        where: {
            email: 'secontdtest@stis.ac.id'
        }
    });
}

const removeSuperAdminTestUser = async () => {
    await prismaClient.user.deleteMany({
        where: {
            email: 'superadmintest@stis.ac.id'
        }
    });
}

const removePenyelenggaraLayanan = async () => {
    await prismaClient.PenyelenggaraLayanan.deleteMany({
        where: {
            nama: 'penyelenggara layanan name test'
        }
    });
}

const removeManyPenyelenggaraLayanan = async () => {
    await prismaClient.PenyelenggaraLayanan.deleteMany({
        where: {
            nama: {
                contains: 'penyelenggara layanan name test'
            }
        }
    });
}

const removeManyStandarLayanan = async () => {
    await prismaClient.StandarLayanan.deleteMany({
        where: {
            nama_layanan: {
                contains: 'standar layanan name test'
            }
        }
    });
}

export {
    createTestUser,
    createSecondTestUser,
    createSuperAdminTestUser,
    createManyPenyelenggaraLayanan,
    removeTestUser,
    removeSecondTestUser,
    removeSuperAdminTestUser,
    removePenyelenggaraLayanan,
    removeManyPenyelenggaraLayanan,
    removeManyStandarLayanan,
    createPenyelenggaraLayanan,
    getTestUser,
    getUpdateTestUser,
    getPenyelenggaraLayanan,
}