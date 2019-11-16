import { appendFile } from 'fs';

const fileName = `mynewfile${getRandom()}.txt`;
const fileContent = `Hello content!${getRandom()}`;
appendFile(fileName, fileContent, function (err) {
  if (err) throw err;
  console.log(`${fileName} is saved!`);
});

function getRandom() {
  return Math.random();
}
