const router=require('express').Router()
const {createHotel,updateHotel,getAllHotel,getHotel,dltHotel,countByCity,countByTypes,getFeatured}=require('../Controllers/hotel')
const { verifyAdmin } = require('../utils/verifyToken')

router.post('/',verifyAdmin, createHotel)
router.put('/:id',verifyAdmin,updateHotel)
router.delete('/:id',verifyAdmin,dltHotel)
router.get('/find/:id',getHotel)
router.get('/',getAllHotel)
router.get('/featured',getFeatured)
router.get('/countbyc',countByCity)
router.get('/countByType',countByTypes)


module.exports=router