
import { Request,Response } from "express"
import { QueryResult } from "pg"
import { pool } from "../database"

export const getUser = async (req:Request,res:Response): Promise<Response> => {
    try {
        const response:QueryResult = await pool.query('SELECT username FROM public.los_system_user')
         return res.status(200).json(response.rows)
    } catch (e) {
        console.log(e)
        return res.status(500).json('Internal Server error')
    }
  
}

export const getUserByID = async ( req:Request,res:Response) : Promise<Response> => {
    try {
        const id = parseInt(req.params.id);
      const response:QueryResult =  await pool.query('SELECT * FROM public.los_system_user WHERE id = $1 ',[id])
      return  res.status(200).json(response.rows)
    } catch (e) {
        console.log(e)
        return res.status(500).json('Internal Server error') ;
    }
}