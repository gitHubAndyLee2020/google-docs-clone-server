import express from 'express'

import { getDocs, createDoc, updateDoc, deleteDoc } from '../controllers/docs.js'

const router = express.Router()

router.get('/', getDocs)
router.post('/',  createDoc)
router.patch('/:id', updateDoc)
router.delete('/:id', deleteDoc)

export default router 