import connection from "./../db";

export default class Category {
    static getAllCategory() {
        return new Promise((resolve, reject) => {
            connection.query("SELECT * FROM category", (err, results) => {
                if (err) reject(err);
                resolve(results);
            });
        });
    }
    static getCategoryById(id) {
        return new Promise((resolve, reject) => {
            connection.query("SELECT * FROM category WHERE id = ?", [id], (err, results) => {
                if (err) reject(err);
                resolve(results[0]);
            });
        });
    }
    static createCategory(name, price) {
        return new Promise((resolve, reject) => {
            connection.query(
                "INSERT INTO category (name) VALUES (?)",
                [name, price],
                (err, results) => {
                    if (err) reject(err);
                    resolve(results.insertId);
                }
            );
        });
    }
    static updateCategory(id, name) {
        return new Promise((resolve, reject) => {
            connection.query(
                "UPDATE category SET name = ? WHERE id = ?",
                [name, id],
                (err, results) => {
                    if (err) reject(err);
                    resolve();
                }
            );
        });
    }
    static deleteCategory(id) {
        return new Promise((resolve, reject) => {
            connection.query("DELETE FROM category WHERE id = ?", [id], (err, results) => {
                if (err) reject(err);
                resolve(results);
            });
        });
    }
}
