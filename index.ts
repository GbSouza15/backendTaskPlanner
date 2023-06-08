import express from 'express'
import router from './src/routes/userRouter'

const app = express()
app.use(express.json())
app.use(router)

const PORT: number = 3333

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
})