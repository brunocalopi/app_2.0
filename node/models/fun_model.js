const {ModeloPelícula} = require('./models');

//La función para mostrar todas las instancias
//select*from table

const getAllMovies = async(req,res)=>{
  try{
    const Películas = await ModeloPelícula.findAll();
    res.json(Películas);
  } catch(error){
    res.json({message: 'No se encontraron instancias'})
  }
}

//La función para mostrar solo 1 instancia
//sql : select*from table where id_película = 1;

const getOneMovie = async(req,res)=>{
  try{
    const Película_unica = await ModeloPelícula.findAll({where: {id: req.params.id}});
  } catch(error){
    res.json({mensaje: "No se encontró la instancia"})
  }
}



//La función para crear un registro

//La función para actualizar un registro

//La función para eliminar un registro (=> ModeloPelícula)
