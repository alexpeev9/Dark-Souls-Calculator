const typeService = require('../services/typeService');
const { errorResponse } = require('../utils/errorsHandler');

exports.getAllTypes = async (req, res) => {
  try {
    const types = await typeService.getAll();
    res.status(200).json(types);
  } catch (err) {
    const errorMessage = errorResponse(err);
    res.status(500).json(errorMessage);
  }
};

exports.getType = async (req, res) => {
  try {
    const typeParam = req.params.type;
    const weapons = await typeService.getType(typeParam);
    res.status(200).json(weapons);
  } catch (err) {
    const errorMessage = errorResponse(err);
    res.status(500).json(errorMessage);
  }
};

exports.createType = async (req, res) => {
  try {
    const nameParam = req.body.name;
    const response = await typeService.create(nameParam);
    return res.status(200).json(response);
  } catch (err) {
    const errorMessage = errorResponse(err);
    res.status(500).json(errorMessage);
  }
};

exports.updateType = async (req, res) => {
  try {
    const nameParam = req.params.type;
    const newNameParam = req.body.name;
    const response = await typeService.update(nameParam, newNameParam);
    return res.status(200).json(response);
  } catch (err) {
    const errorMessage = errorResponse(err);
    res.status(500).json(errorMessage);
  }
};

exports.addWeaponToType = async (req, res) => {
  try {
    const typeNameParam = req.params.type;
    const weaponNameParam = req.body.name;

    const response = await typeService.addWeapon(
      typeNameParam,
      weaponNameParam
    );

    return res.status(200).json(response);
  } catch (err) {
    const errorMessage = errorResponse(err);
    res.status(500).json(errorMessage);
  }
};

exports.removeWeapon = async (req, res) => {
  try {
    const typeNameParam = req.params.type;
    const weaponNameParam = req.params.weapon;

    const response = await typeService.removeWeapon(
      typeNameParam,
      weaponNameParam
    );

    return res.status(200).json(response);
  } catch (err) {
    const errorMessage = errorResponse(err);
    res.status(500).json(errorMessage);
  }
};

exports.deleteType = async (req, res) => {
  try {
    const nameParam = req.params.type;
    const response = await typeService.remove(nameParam);
    return res.status(200).json(response);
  } catch (err) {
    const errorMessage = errorResponse(err);
    res.status(500).json(errorMessage);
  }
};
