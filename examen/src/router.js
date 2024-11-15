import ArtWorkController from "./ArtWorkController.js"
const artWorkController = new ArtWorkController
export default (app) => {
    app.get('/artworks/', artWorkController.getAll.bind(artWorkController))
    app.get('/artworks/filter', artWorkController.filter.bind(artWorkController))
    app.post('/artworks/', artWorkController.create.bind(artWorkController))
    app.put('/artworks/:id', artWorkController.update.bind(artWorkController))
    app.delete('/artworks/:id', artWorkController.delete.bind(artWorkController))
   
}











// import ArtWorkController from "./ArtWorkController.js"
// import express from "express"
// export default class RouteArtWork{
//         artWorkController
//         router

//         constructor() {    
//             this.router = express.Router()
//             this.artWorkController = new ArtWorkController
//             this.routes()
//         }

//         routes(){
//             this.router.get('/', this.artWorkController.getAll.bind(this.artWorkController))
//             this.router.get('/filter', this.artWorkController.filter.bind(this.artWorkController))
//             this.router.post('/', this.artWorkController.create.bind(this.artWorkController))
//             this.router.put('/:id', this.artWorkController.update.bind(this.artWorkController))
//             this.router.delete('/:id', this.artWorkController.delete.bind(this.artWorkController))
//         }
//         registrateRouter() {
//             return this.router
//         }


//     }































