import multer from 'multer'
import DetectImageController from '../controllers/detectImage'

const uploadDriver = multer({ dest: '/tmp/uploads', fieldNameSize: 100, fileSize: 1024 * 1024 })

const image = (router) => {
  router.post('/detect-image', uploadDriver.single('file'), (req, res) => {
    if (!req.file) return res.status(404).json({ message: 'Image not sent :(' })
  
    const detectImageController = new DetectImageController()
    detectImageController.analize(req.file, res)
  })

  router.post('/detect-image-by-base64', (req, res) => {
    if (!req.body.file) return res.status(404).json({ message: 'Image not sent :(' })
  
    const detectImageController = new DetectImageController()
    detectImageController.analizeByBase64(req.body.file, res)
  })
}

export default image