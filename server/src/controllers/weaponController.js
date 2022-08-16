const weaponService = require('../services/weaponService');
const { errorResponse } = require('../utils/errorsHandler');

exports.getWeaponDetails = async (req, res) => {
  try {
    const typeNameParam = req.params.type;
    const weaponNameParam = req.params.weapon;

    const weapon = await weaponService.getDetails(
      weaponNameParam,
      typeNameParam
    );
    res.status(200).json(weapon);
  } catch (err) {
    const errorMessage = errorResponse(err);
    res.status(500).json(errorMessage);
  }
};

exports.searchByName = async (req, res) => {
  try {
    const name = req.body.name;
    const weapons = await weaponService.searchByName(name);
    res.status(200).json(weapons);
  } catch (err) {
    const errorMessage = errorResponse(err);
    res.status(500).json(errorMessage);
  }
};

exports.searchByValues = async (req, res) => {
  try {
    const requirements = req.body;
    const weapons = await weaponService.searchByValues(requirements);
    res.status(200).json(weapons);
  } catch (err) {
    const errorMessage = errorResponse(err);
    res.status(500).json(errorMessage);
  }
};
