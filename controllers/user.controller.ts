import { Request, Response } from "express";
import pool from "../db";

class UserController {
    async createUser(req: Request, res: Response): Promise<void> {
        const { name, email } = req.body;
        const newUser = await pool.query(
            `INSERT INTO person (name, email) values ($1, $2) RETURNING *`,
            [name, email]
        );
        res.json(newUser.rows);
    }
    async getUsers(req: Request, res: Response): Promise<void> {
        const user = await pool.query(`SELECT * FROM person`);
        res.json(user.rows);
    }
    async getOneUser(req: Request, res: Response): Promise<void> {
        const id = req.params.id;
        const user = await pool.query(`SELECT * FROM person where id = $1`, [
            id,
        ]);
        res.json(user.rows[0]);
    }
    async updateUser(req: Request, res: Response): Promise<void> {
        const { id, name, email } = req.body;
        const updatedUser = await pool.query(`
                UPDATE person set name = $1, email = $2 where id = $3 RETURNING *`,
                [name, email, id])
            res.json(updatedUser.rows)
    }
    async deleteUser(req: Request, res: Response): Promise<void> {
        const id = req.params.id;
        const user = await pool.query(`DELETE from person where id = $1`, [id]);
        res.json(user.rows);
    }
}

export default UserController;
