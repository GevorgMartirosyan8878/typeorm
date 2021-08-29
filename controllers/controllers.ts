import { Router } from "express";
import { services } from "../services/services";

export const shopRouter = Router();

shopRouter.get('/', (req, res) => {
    services.index().then( result => {
        return res.send( result )
    })
})

shopRouter.get('/:id', (req, res) => {
    services.geById(req.params.id).then( result => {
        return res.send( result )
    })
})

shopRouter.post('/', (req, res) => {
    res.send( services.create(req.body) )
})

shopRouter.put('/:id', (req, res) => {
    services.update(req.body, req.params.id).then( () => {
        res.send( `updated: ${req.params.id}` )
    })
})

shopRouter.delete('/:id', (req, res) => {
    services.remove(req.params.id).then( () => {
        res.send( `deleted: ${req.params.id}` )
    } )
})