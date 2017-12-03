import axios from 'axios'
import EnumHelper from './enumHelper'

class VisualApi {

  constructor (base64Image) {
    this.HTTPClient = axios.create({
      baseURL: 'https://vision.googleapis.com/v1/'
    })

    this._createRequestTemplate(base64Image)
  }

  _createRequestTemplate (content) {
    this.template = {
      requests: [
        { 
          image: { content },
          features: [{ type: 'LABEL_DETECTION', maxResults: 5 }]
        }
      ]
    }
  }

  initAnalize () {
    const params = { key: EnumHelper.GOOGLE_API_KEY }
    const body = this.template
    return this.HTTPClient.post('images:annotate', body, { params })
  }
 
}

export default VisualApi