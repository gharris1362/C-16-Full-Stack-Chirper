import * as mysql from 'mysql';
import Chirps from './chirps'

export const Connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'c16Chirp',
    password: 'password1',
    database: 'c16chirper'
});


export const Query = (query, values) => {
    return new Promise((resolve, reject) => {
        Connection.query(query, values, (err, res) => {
            if (err) return reject(err);
            resolve(res);
        });
    });
};


export default Chirps;