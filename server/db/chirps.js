import { Query } from './index';

const all = async() => Query("Select Chirps.id, Chirps.content, Chirps._created, Chirps.userid, users.name from Chirps join users on users.id = chirps.userid");
const one = async(id) => Query("select * from Chirps join Users on Chirps.userid = Users.id where Chirps.id = ?", [id]);
const postChirp = async(content, userid) => Query("insert into Chirps (content, userid) values (?, ?)", [content, userid]);
const postUser = async(name) => Query("insert into Users (name) values (?)", [name]);
const deleteUser = async(id) => Query("delete from Users where Users.id = ?", [id])
const deleteChirps = async(id) => Query("delete from Chirps where Chirps.id = ?", [id])
const editChirp = async(content, id) => Query("Update Chirps set content = ? where chirps.id = ?", [content, id]);
export default {
    all,
    one,
    postChirp,
    postUser,
    deleteUser,
    deleteChirps,
    editChirp,
};