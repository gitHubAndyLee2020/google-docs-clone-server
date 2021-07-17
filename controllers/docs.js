import mongoose from 'mongoose'

import DocMessage from '../models/DocMessage.js'

export const getDocs = async (req,res) => {
    try {
        const docMessages = await DocMessage.find()

        res.status(200).json(docMessages)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const createDoc = async (req,res) => {
    const { title, content, darkTheme, color, fontSize, fontFamily, bold, italics, allowUpdate } = req.body

    const newDoc = new DocMessage({ title, content, darkTheme, color, fontSize, fontFamily, bold, italics, allowUpdate })
    
    try {
        await newDoc.save()

        res.status(200).json(newDoc)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const updateDoc = async (req,res) => {
    const { id } = req.params
    const { title, content, darkTheme, color, fontSize, fontFamily, bold, italics, allowUpdate } = req.body

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No doc with id: ${id}`)

    const updatedDoc = { title, content, darkTheme, color, fontSize, fontFamily, bold, italics, allowUpdate, _id: id }

    await DocMessage.findByIdAndUpdate(id, updatedDoc, { new: true })

    res.json(updatedDoc)
}

export const deleteDoc = async (req,res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No doc with id: ${id}`)

    await DocMessage.findByIdAndRemove(id)

    res.json({ message: 'Doc deleted successfully' })
}