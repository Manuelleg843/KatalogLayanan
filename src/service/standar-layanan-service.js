import { prismaClient } from "../application/database.js";
import { ResponseError } from "../error/response-error.js";
import { createStandarLayananValidation } from "../validation/standar-layanan-validation.js";
import { validate } from "../validation/validation.js";
import { v4 as uuidv4 } from "uuid";

const create = async (user, imageFile, request) => {
    const standar_layanan = validate(createStandarLayananValidation, request);

    const countPenyelenggaraLayanan = await prismaClient.PenyelenggaraLayanan.count({
        where: {
            id: standar_layanan.penyelenggara_layanan_id,
        },
    });

    if (countPenyelenggaraLayanan !== 1) {
        throw new ResponseError(404, "Penyelenggara Layanan not found");
    }

    if (imageFile) {
        const generateUniqueFileName = () => {
            const uuid = uuidv4();
            return uuid;
        };
        const fileExtension = imageFile.name.split('.').pop();
        const fileName = generateUniqueFileName() + '.' + fileExtension;
        const imagePath = "uploads/images/" + fileName;
        await imageFile.mv(imagePath);
        standar_layanan.gambar = fileName;
    }

    return await prismaClient.StandarLayanan.create({
        data: standar_layanan,
        select: {
            id: true,
            nama_layanan: true,
            persyaratan: true,
            sistem_mekanisme_dan_prosedur: true,
            jangka_waktu_pelayanan: true,
            biaya_tarif: true,
            produk_layanan: true,
            penanganan_pengaduan_saran_masukan: true,
            dasar_hukum: true,
            sarana_prasarana_fasilitas: true,
            kopetensi_pelaksana: true,
            pengawasan_internal: true,
            jumlah_pelaksana: true,
            jaminan_pelayanan: true,
            jaminan_keamanan_keselamatan_pelayanan: true,
            evaluasi_kinerja_pelaksana: true,
            gambar: true,
            link: true,
            penyelenggara_layanan_id: true,
        },
    });
}

const update = async (user, id, imageFile, request) => {
    const standar_layanan = validate(createStandarLayananValidation, request);

    const countStandarLayanan = await prismaClient.StandarLayanan.count({
        where: {
            id: id,
        },
    });

    if (countStandarLayanan !== 1) {
        throw new ResponseError(404, "Standar Layanan not found");
    }

    if (imageFile) {
        const generateUniqueFileName = () => {
            const uuid = uuidv4();
            return uuid;
        };
        const fileExtension = imageFile.name.split('.').pop();
        const fileName = generateUniqueFileName() + '.' + fileExtension;
        const imagePath = "uploads/images/" + fileName;
        await imageFile.mv(imagePath);
        standar_layanan.gambar = fileName;
    }

    return await prismaClient.StandarLayanan.update({
        where: {
            id: id,
        },
        data: standar_layanan,
        select: {
            id: true,
            nama_layanan: true,
            persyaratan: true,
            sistem_mekanisme_dan_prosedur: true,
            jangka_waktu_pelayanan: true,
            biaya_tarif: true,
            produk_layanan: true,
            penanganan_pengaduan_saran_masukan: true,
            dasar_hukum: true,
            sarana_prasarana_fasilitas: true,
            kopetensi_pelaksana: true,
            pengawasan_internal: true,
            jumlah_pelaksana: true,
            jaminan_pelayanan: true,
            jaminan_keamanan_keselamatan_pelayanan: true,
            evaluasi_kinerja_pelaksana: true,
            gambar: true,
            link: true,
            penyelenggara_layanan_id: true,
        },
    });
}

export default { create };