import connection from "./../db";

export default class User {
  static createUser(name, email, password, role_id) {
    return new Promise((resolve, reject) => {
      connection.query(
        "INSERT INTO user (name, email, password, role_id) VALUES (?, ?, ?, 2)",
        [name, email, password, role_id],
        (err, results) => {
          if (err) reject(err);
          resolve(results.insertId);
        }
      );
    });
  }
  static checkEmailExists(email) {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT * FROM user WHERE email = ?",
        [email],
        (err, results) => {
          if (err) reject(err);
          resolve(results.length > 0 ? results[0] : null);
        }
      );
    });
  }
}