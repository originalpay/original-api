import multer from 'multer'
import DetectImageController from '../controllers/detectImage'

const uploadDriver = multer({ dest: '/tmp/uploads', fieldNameSize: 100, fileSize: 1024 * 1024 })

const image = (router) => {
  router.post('/detect-image', uploadDriver.single('file'), (req, res) => {
    if (!req.file) return res.json({ message: 'Image not sent :(' })
  
    const detectImageController = new DetectImageController()
    detectImageController.analize(req.file, res)
  }) 
}

export default image