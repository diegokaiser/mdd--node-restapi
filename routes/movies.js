import { Router } from 'express'
import { MovieController } from '../controllers/movies.js'

export const router = Router()

router.get('/', MovieController.getAll)

router.post('/', MovieController.create)

router.get('/:id', MovieController.getById)

router.detele('/:id', MovieController.delete)

router.patch('/:id', MovieController.update)
