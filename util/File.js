const fs = require('fs');

const writeFile = (contents) => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', contents, err => {
            if (err) {
                reject(err);
                return;
            };
            resolve({
                ok: true,
                message: 'Team page generated'
            });
        });
    });
}

module.exports = writeFile;