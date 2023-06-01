import express from 'express'

const app = express()

const PORT: number = 3333

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
})