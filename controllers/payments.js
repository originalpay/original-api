import axios from 'axios'
import EnumHelper from '../commons/enumHelper'

class PaymentController {

  constructor () {
    this.HTTPClient = axios.create({
      baseURL: 'https://sandbox.original.com.br',
      headers: {
        'Authorization': EnumHelper.TOKEN,
        'developer-key': '28f955c90b3a2940134ff1a970050f569a87facf'
      }
    })
  }

  async makePayment ({
    amount, favoredId, comments = 'Some transaction', callbackUrl = () => ({}) 
  }, response) {

    try {
      const body = { amount, comments, favored_id: favoredId, callback_url: callbackUrl }
      const { data: paymentResponse } = await this.HTTPClient
        .post('payments/v2/money-transfer/between-accounts', body)

      console.log('Payment response', paymentResponse)
      response.status(200).json(
        Object.assign({}, { success: true }, paymentResponse)
      )
    } catch (paymentError) {
      console.log('Error on create payment', paymentError)
      response.status(500).json({ message: 'Error on create payment' })
    }

  }
}

export default PaymentController