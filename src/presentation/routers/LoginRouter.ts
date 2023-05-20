import express from 'express'
import { Request, Response } from 'express'
import { LoginCheck } from '../../domain/interfaces/UseCase/LoginCheckInterface'


const LoginCheckRouter = (loginCheck: LoginCheck) => {
    const router = express.Router()

    router.post('/api/login_check', async (req: Request, res: Response) => {
        try {
            await loginCheck.execute(req.body)
            res.statusCode = 201
            res.json({message: "Login succeful... "})
        } catch (error) {
            res.status(500).send({ message: "Error saving data" })
        }
    })

    return router
}


export default LoginCheckRouter;