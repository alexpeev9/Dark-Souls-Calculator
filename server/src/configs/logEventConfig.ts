import fs, { promises } from 'fs';
import path from 'path';

const logEventConfig = async (message: string, logName: string) => {
  const currentDate = new Date();
  console.log(`${currentDate}\n${logName}\t${message}`);
  // // Add If you want to store logs!
  // const logItem = `${currentDate}\n${message}\n\n`;
  // try {
  //   if (!fs.existsSync(path.join(__dirname, '..', 'logs'))) {
  //     await promises.mkdir(path.join(__dirname, '..', 'logs'));
  //   }
  //   await promises.appendFile(
  //     path.join(__dirname, '..', 'logs', logName),
  //     logItem
  //   );
  // } catch (err) {
  //   console.log(err);
  // }
};

export default logEventConfig;
