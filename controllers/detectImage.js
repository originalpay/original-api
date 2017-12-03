import { readFile, renameSync } from 'fs'
import { promisify } from 'util'
import { find } from 'lodash'

import Database from '../commons/database'
import VisionAPI from '../commons/visionApi'

const readFilePromisified = promisify(readFile)

class DetectImageController {

  async analizeByBase64 (base64, response) {
    const visionAPI = new VisionAPI(fileBase64)
    
    const { data: visionResponse } = await visionAPI.initAnalize()
    const probablyResponse = visionResponse.responses[0].labelAnnotations
    console.log('Vision response', JSON.stringify(visionResponse, null, 2))

    const pattern = Database.products[0].match
    const probablyProduct = find(probablyResponse, (item) => {
      if (pattern.test(item.description)) return item
    })

    console.log('Probably product', probablyProduct)

    return probablyProduct
      ? response.status(200).json(Database.products[0])
      : response.status(404).json({ message: 'Product not found' })
  }

  async analize ({ mimetype, path }, response) {
    const extension = mimetype.split('/')[1]
    const fullPath = `${path}.${extension}`

    renameSync(path, fullPath)

    const fileBase64 = await readFilePromisified(fullPath, 'base64')
    const visionAPI = new VisionAPI(fileBase64)

    const { data: visionResponse } = await visionAPI.initAnalize()

    const probablyResponse = visionResponse.responses[0].labelAnnotations
    console.log('Vision response', JSON.stringify(visionResponse, null, 2))

    const pattern = Database.products[0].match
    const probablyProduct = find(probablyResponse, (item) => {
      if (pattern.test(item.description)) return item
    })

    console.log('Probably product', probablyProduct)

    return probablyProduct
      ? response.status(200).json(Database.products[0])
      : response.status(404).json({ message: 'Product not found' })
  }
}

export default DetectImageController