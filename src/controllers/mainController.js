const mainController = {
    index: (req, res)=>{
        res.render("index");
    },
    talleresIndex:  (req, res)=>{
        res.render("talleresIndex");
    },
    tallerDanza:  (req, res)=>{
        res.render("tallerDanza");
    },
    tallerCapoeira:  (req, res)=>{
        res.render("tallerCapoeira");
    },
    tallerPercusiones:  (req, res)=>{
        res.render("tallerPercusiones");
    },
    memorial:  (req, res)=>{
        res.render("memorial");
    },
    programacion:  (req, res)=>{
        res.render("programacion");
    },
    somos:  (req, res)=>{
        res.render("somos");
    },
    radioBocina:  (req, res)=>{
        res.render("radioBocina");
    }
}


// Acá exportamos el resultado
module.exports=mainController;