/* my framer motion Varient */

export const err404Var = {
    hidden:{
        opacity:0,
        y:50
    },
    visible:{
        opacity:1,
        y:0
    }
}
export const NavHumbergerVar = {
    hidden:{
        opacity:0,
        y:-1000,
        
            
        
    },
    visible:{
        opacity:1,
        y:0,
        transition: {
            type: "tween",
            duration: 0.3,
            delayChildren: 0.2,
            staggerChildren: 0.3
          }
    },
    
}
export const fotterVar = {
    hidden:{
        opacity:0,
        
    },
    visible:{
        opacity:1,
        transition:{
            duration:2
            
        }

    }
}
export const NavLargParentVar = {
    hidden:{
        opacity:0,
        transition:{
            duration:1
            
        }
    },
    visible:{
        opacity:1,
        
        
    }
}
export const listVaritions  = {
    hidden:{
        opacity: 0,
        scale:0,  
          transition: { duration: 0.2 }

    },
    visible:{
        opacity: 1,
        scale:1,
    transition:
     {
        
     type: "spring",
      stiffness: 300,
       damping: 24 
    }
    }
}
export const seacrhBarParentVar = {
    hidden:{
        
        opacity:0,
        
        
    },
    visible:{
        
        opacity:1,
        
       
    
    }

} 
export const filterBarNavVar = {
    hidden:{
        opacity:0,
        x:-1000
    },
    visible:{
        opacity:1,
        x:0
    }
}
const feutchersParents= {
    hidden:{
        
    },
    visible:{

    }
}