import penyelenggaraLayananService from "../service/penyelenggara-layanan-service.js";

const create = async (req, res, next) => {
    try {
        const user = req.user;
        const request = req.body;
        const result = await penyelenggaraLayananService.create(user, request);
        res.status(200).json({
            data: result
        });
    } catch (e) {
        next(e);
    }
}

const get = async (req, res, next) => {
    try {
        const id = req.params.Id;
        const result = await penyelenggaraLayananService.get(id);
        res.status(200).json({
            data: result
        });
    } catch (e) {
        next(e);
    }
}

const update = async (req, res, next) => {
    try {
        const user = req.user;
        const id = req.params.Id;
        const request = req.body;
        request.id = id;

        const result = await penyelenggaraLayananService.update(user, request);
        res.status(200).json({
            data: result
        });
    } catch (e) {
        next(e);
    }
}

const remove = async (req, res, next) => {
    try {
        const user = req.user;
        const id = req.params.Id;

        await penyelenggaraLayananService.remove(user, id);
        res.status(200).json({
            data: 'OK'
        });
    } catch (e) {
        next(e);
    }
}

const search = async (req, res, next) => {
    try {
        const request = {
            nama: req.query.nama,
            page: req.query.page,
            size: req.query.size
        }

        const result = await penyelenggaraLayananService.search(request);
        res.status(200).json({
            data: result.data,
            paging: result.paging,
        });
    } catch (e) {
        next(e);
    }
}

export default {
    create,
    get,
    update,
    remove,
    search
}