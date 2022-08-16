const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');
const logEvent = async (message, logName) => {
  const currentDate = new Date();
  const logItem = `${currentDate}\n${message}\n\n`;
  console.log(`${currentDate}\n${logName}\t${message}`);
  try {
    if (!fs.existsSync(path.join(__dirname, '..', 'logs'))) {
      await fsPromises.mkdir(path.join(__dirname, '..', 'logs'));
    }
    await fsPromises.appendFile(
      path.join(__dirname, '..', 'logs', logName),
      logItem
    );
  } catch (err) {
    console.log(err);
  }
};
module.exports = logEvent;
