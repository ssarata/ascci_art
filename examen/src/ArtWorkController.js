import artworkDataValidator from "./utils.js";
      
import ArtWorkService from "./ArtWorkService.js"
   
import  * as constantes from "./constantes.js"




export default class ArtWorkController {
    artworkService
    constructor() {    
        this.artworkService = new ArtWorkService();
    }
    
    async create(req, res) {
        const data=req.body;
        console.log(data);
        try {
            const proxy = artworkDataValidator(data);   
            console.log(proxy.title);
   
            proxy.title=data.title;
           proxy.type=data.type;
            proxy.year=data.year;
            proxy.artist=data.artist;
            const Artwork= await this.artworkService.create(proxy)
            res.status(constantes.HTTP_STATUS_CREATED).json(Artwork)
        } 
        catch (error) {
            res.status(constantes.HTTP_STATUS_INTERNAL_SERVER_ERROR).json({ error: error.message })
        }
    }
 
    async getAll(req, res) {
        try {

          
            
            const artworks = await this.artworkService.getAll()

           
            res.status(constantes.HTTP_STATUS_OK).json(artworks)
        } 
        catch (error) {
            res.status(constantes.HTTP_STATUS_INTERNAL_SERVER_ERROR).json({ error: error.message })
        }
    }

    async update(req, res) {
        
        try {
            const data = req.body
            console.log(data.title);
        
            const proxy = artworkDataValidator(data);        
            proxy.title=data.title;
            console.log(proxy.title);
            proxy.type=data.type;
            proxy.year=data.year;
            proxy.artist=data.artist;
            console.log(proxy);
            
            const id = parseInt(req.params.id)
            await this.artworkService.update(id,proxy)
            res.status(constantes.HTTP_STATUS_OK).json({ message: 'Artwork updated successfully'})
        } 
        catch (error) {
            res.status(constantes.HTTP_STATUS_INTERNAL_SERVER_ERROR).json({ error: error.message })
        }
    }

    async delete(req, res) {
        try {
            const id = parseInt(req.params.id)
            await this.artworkService.delete(id)
            res.status(constantes.HTTP_STATUS_OK).json({ message: 'Artwork deleted successfully' })
        } 
        catch (error) {
            res.status(constantes.HTTP_STATUS_INTERNAL_SERVER_ERROR).json({ error: error.message })
        }
    }

    async filter(req, res) {
        try {
            
            const query = {
                "type":req.query.type,
                "year":parseInt(req.query.year),
                "artist":req.query.artist
            }
            console.log(query);
            //JSON.parse(query);
            const Artwork = await this.artworkService.get(query)
            log(Artwork)
            
            res.status(constantes.HTTP_STATUS_OK).json(Artwork)
        } 
        catch (error) {
            res.status(constantes.HTTP_STATUS_INTERNAL_SERVER_ERROR).json({ error: error.message })
        }
    }
}







   