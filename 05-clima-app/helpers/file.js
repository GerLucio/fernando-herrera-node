const fs = require('fs');
const filePath = './storage/history.json';

const saveHistory = (history) => {
  fs.writeFileSync(filePath, JSON.stringify(history));
};

const readHistory = () => {
  if (fs.existsSync(filePath)) {
    const historyJson = fs.readFileSync(filePath, { encoding: 'utf-8' });
    return JSON.parse(historyJson);
  }
  return [];
};

module.exports = {
  saveHistory,
  readHistory,
};
