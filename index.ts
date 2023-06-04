import express from 'express'

const app = express()
app.use(express.json())

const PORT: number = 3333

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
})