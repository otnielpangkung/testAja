const { Murid, Kelas, Sekolah, Item, Pembelian } = require("./models")


// function () {

// }



class Controller {

    // Transaksi Controller

    static async addItem(req, res) {

        let aco = req.body.saya
        try {
            const result = await aco.forEach(item => {
                Item.create({
                    namaItem: item.namaItem,
                    harga: item.harga,
                    stok: item.stok,
                })

            })
            res.status(200).json(result)
        }
        catch (err) {
            res.status(404).json(err)
        }
    }

    static getAllItem(req, res) {
        Item.findAll()
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(401).json(err)
            })

    }

    // Sekolah Controller
    static getMurid(req, res) {
        Murid.findAll({
            include: [Kelas, Sekolah]
        })
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(401).json(err)
            })
    }
    static getSekolah(req, res) {
        Sekolah.findAll({
            include: [Kelas, Murid]
        })
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(401).json(err)
            })
    }
    static getKelas(req, res) {
        Kelas.findAll({
            include: [Murid, Sekolah]
        })
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(401).json(err)
            })
    }
    static getMuridKelas(req, res) {
        Murid.findAll({
            include: [Kelas, Sekolah],
            where: {
                KelasId: req.params.id
            }
        })
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(401).json(err)
            })
    }
    static getKelasSekolah(req, res) {
        Murid.findAll({
            include: [Murid, Sekolah],
            where: {
                SekolahId: req.params.id
            }
        })
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(401).json(err)
            })
    }

    static addMurid(req, res) {

        /**
         * dataMurid = [
         *  {
         *     namaMurid: "",
         *     tanggalLahir: 2,
         *   },
         * {
         *     namaMurid: "",
         *     tanggalLahir: 12,
         *   }
         * ]
         * this.$axios.$post(url, { students: dataMurid })
         */

        req.body.students.forEach(murid => {
            Murid.create({
                namaMurid: murid.namaMurid,
                tanggalLahir: murid.tanggalLahir,
                SekolahId: murid.SekolahId,
                KelasId: murid.KelasId,
            })
        })

            // Murid.create({
            //     namaMurid: req.body.namaMurid,
            //     tanggalLahir: req.body.tanggalLahir,
            //     SekolahId: req.body.SekolahId,
            //     KelasId: req.body.KelasId,
            // })
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(401).json(err)
            })

    }
    static addSekolah(req, res) {
        /*
        reql.lbody.namaSekolah = [
            {
                nama: "A"
            },
            {
                nama: "B"
            }
        ]
        */

        req.body.namaSekolah.foreach((sekolah) => {
            Sekolah.create({
                namaSekolah: sekolah,
            })
        })

            // Sekolah.create({
            //     namaSekolah: req.body.namaSekolah,

            // })
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(401).json(err)
            })

    }
    static addKelas(req, res) {
        Kelas.create({
            namaKelas: req.body.namaKelas,
            SekolahId: req.body.SekolahId,
        })
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(401).json(err)
            })

    }
}

module.exports = Controller