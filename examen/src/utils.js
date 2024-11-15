export default function artworkDataValidator(data){
     let handler={
        set(target,prop,value){
                if(prop=="title"){
                   console.log( typeof target[prop]);
                   
                    if(typeof target[prop]!='string' &&target[prop]==null){
                        throw new Error(`la valeur de ${prop} doit être une chaine de caractère non null`);
                    }
                }
                if(prop=="artist"){
                    if(typeof target[prop]!="string"&&target[prop]==null){
                        throw new Error(`la valeur de ${prop} doit être une chaine de caractère non null`);
                    }
                }
                if (prop=="year") {
                    if(parseInt(target[prop])<0 && typeof target[prop]!="number"){
                        throw new Error("l'age doit être un entier positif");
                    }
                }
                if(prop=="type"){
                    if (target[prop]!="peinture" && target[prop]!="dessin" && target[prop]!="sculpture"&&target[prop]!="acii_art") {
                        throw new Error("la valeur du type n'est pas autorisées");
                    }

                }
            return target[prop]=value
        }
    }
    return new Proxy(data,handler)
}
    
    




