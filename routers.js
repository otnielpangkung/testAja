const router = require("express").Router()
const Controller = require("./Controller")

router.get("/", (req, res) => {
    res.send("halooo")
})

router.get("/sekolah", Controller.getSekolah)
router.get("/kelas", Controller.getKelas)
router.get("/murid", Controller.getMurid)
router.get("/muridkelas/:id", Controller.getMuridKelas)
router.get("/kelassekolah/:id", Controller.getKelasSekolah)

router.post("/sekolah", Controller.addSekolah)
router.post("/kelas", Controller.addKelas)
router.post("/murid", Controller.addMurid)

// Transaksi
router.post("/item", Controller.addItem)
router.get("/item", Controller.getAllItem)

module.exports = router