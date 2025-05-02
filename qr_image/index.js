import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';
inquirer
  .prompt([
    {
        message:'Enter the URL:',
        name:'URL'
    }
  ])
  .then((answers) => {
    const url=answers.URL;
    var qr_image = qr.image(url);
    qr_image.pipe(fs.createWriteStream('qr_image.png'));
  })
  .catch((error) => {
    if (error.isTtyError) {
     console.log(error)
    } else {
      console.log('qr generated succesfully!')
    }
  });
