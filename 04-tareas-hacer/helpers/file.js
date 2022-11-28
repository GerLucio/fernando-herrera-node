const fs = require('fs');
const filePath = './storage/tasks.json';

const saveList = (list) => {
  fs.writeFileSync(filePath, JSON.stringify(list));
};

const readList = () => {
  if (fs.existsSync(filePath)) {
    const listJson = fs.readFileSync(filePath, { encoding: 'utf-8' });
    return JSON.parse(listJson);
  }
  return [];
};

module.exports = {
  saveList,
  readList,
};
