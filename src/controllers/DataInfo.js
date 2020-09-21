const pool = require('../database/pool');

class DataInfoController {
  static getStates(request, response) {
    pool.query('SELECT nome, sigla FROM estado', (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    });
  }

  static getCitys(request, response) {

    const { estado } = request.params;

    pool.query('SELECT nome, area FROM municipio WHERE estado ilike $1', [estado],(error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    });
  }

}

module.exports = DataInfoController;