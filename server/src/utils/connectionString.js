const { nodeENV, dbPROD, dbDEV } = require('./envParams');
module.exports = () => (nodeENV == 'production' ? dbPROD : dbDEV);
