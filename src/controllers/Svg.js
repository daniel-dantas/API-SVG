const pool = require('../database/pool');

class SvgController {
  static getSVG(request, response){
    const municipio = request.params.nome;
    pool.query('SELECT ST_AsSVG(geom) FROM municipio WHERE nome ilike $1', [municipio], (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    });
  }

  static getViewBox(request, response) {
    const municipio = request.params.nome;
  
    pool.query('SELECT getViewBox($1)', [municipio], (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    });
  }

}

module.exports = SvgController;