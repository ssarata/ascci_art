
import  prisma from "./prisma.js"
export default class ArtWorkService {
      getAll() {
        try {
            return   prisma.artwork.findMany();
        } catch (error) {
            throw new Error(error);
        }
    }
    
    create(_data) {
        try {
            return prisma.artwork.create({
                data: _data
              })
        } catch (error) {
            throw new Error(error);
            
        }
    }

    get(query) {
        
        
        try {
          
            return prisma.artwork.findMany({
                
                where:{
                  artist:{
                    contains:query.artist
                },

                  type:query.type,
                  year:query.year
                }
            })
        } catch (error) {
          
            throw new Error(error);
            
        }
    }

    update(_id, _data) {
        try {
            return prisma.artwork.update({
                where: {
                    id:_id
                },
                data: _data
              })
        } catch (error) {
            throw new Error(error);
            
        }
       
    }

    delete(_id) {
        try {
            return prisma.artwork.delete({
                where: {
                    id:_id
                }
              })
        } catch (error) {
            throw new Error(error);
            
        }
    }
}























  





























  