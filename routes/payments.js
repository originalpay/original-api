
import PaymentController from '../controllers/payments'

const payments = (router) => {
  router.post('/payments', (req, res) => {
    if (!req.body.amount) return res.status(401).json({ message: 'Amount not provided' })
    if (!req.body.favoredId) return res.status(401).json({ message: 'FavoredId not provided' })

    const paymentController = new PaymentController()
    paymentController.makePayment(req.body, res)
  })
}

export default payments