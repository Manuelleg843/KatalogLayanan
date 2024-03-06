import Joi from 'joi';

const createStandarLayananValidation = Joi.object({
    nama_layanan: Joi.string().max(100).required(),
    persyaratan: Joi.string().max(100).optional(),
    sistem_mekanisme_dan_prosedur: Joi.string().optional(),
    jangka_waktu_pelayanan: Joi.string().max(100).optional(),
    biaya_tarif: Joi.string().max(100).optional(),
    produk_layanan: Joi.string().optional(),
    penanganan_pengaduan_saran_masukan: Joi.string().optional(),
    dasar_hukum: Joi.string().optional(),
    sarana_prasarana_fasilitas: Joi.string().optional(),
    kopetensi_pelaksana: Joi.string().optional(),
    pengawasan_internal: Joi.string().max(100).optional(),
    jumlah_pelaksana: Joi.string().max(100).optional(),
    jaminan_pelayanan: Joi.string().optional(),
    jaminan_keamanan_keselamatan_pelayanan: Joi.string().optional(),
    evaluasi_kinerja_pelaksana: Joi.string().optional(),
    gambar: Joi.string().max(100).optional(),
    file_gambar: Joi.any().optional(),
    link: Joi.string().max(100).optional(),
    penyelenggara_layanan_id: Joi.number().required(),
});

const updateStandarLayananValidation = Joi.object({
    id: Joi.number().required(),
    nama_layanan: Joi.string().max(100).optional(),
    persyaratan: Joi.string().max(100).optional(),
    sistem_mekanisme_dan_prosedur: Joi.string().optional(),
    jangka_waktu_pelayanan: Joi.string().max(100).optional(),
    biaya_tarif: Joi.string().max(100).optional(),
    produk_layanan: Joi.string().optional(),
    penanganan_pengaduan_saran_masukan: Joi.string().optional(),
    dasar_hukum: Joi.string().optional(),
    sarana_prasarana_fasilitas: Joi.string().optional(),
    kopetensi_pelaksana: Joi.string().optional(),
    pengawasan_internal: Joi.string().max(100).optional(),
    jumlah_pelaksana: Joi.string().max(100).optional(),
    jaminan_pelayanan: Joi.string().optional(),
    jaminan_keamanan_keselamatan_pelayanan: Joi.string().optional(),
    evaluasi_kinerja_pelaksana: Joi.string().optional(),
    gambar: Joi.string().max(100).optional(),
    file_gambar: Joi.any().optional(),
    link: Joi.string().max(100).optional(),
    penyelenggara_layanan_id: Joi.number().optional(),
});

export {
    createStandarLayananValidation,
    updateStandarLayananValidation
};