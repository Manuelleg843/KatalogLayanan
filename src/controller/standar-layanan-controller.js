import standarLayananService from "../service/standar-layanan-service.js";

const create = async (req, res, next) => {
    try {
        const user = req.user;
        const request = req.body;

        let imageFile = null;
        if (req.files && req.files.file_gambar) {
            imageFile = req.files.file_gambar;
        }
        const result = await standarLayananService.create(user, imageFile, request);
        res.status(200).json({
            data: result
        });
    } catch (e) {
        next(e);
    }
}

export default { create };