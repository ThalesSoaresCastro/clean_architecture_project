import 'module-alias/register'
import app from "@/main/config/app"
import { MongoHelper } from '@/external/repositories/mongodb/helper'

//mudar aqui para a url do banco real MONGO
MongoHelper.connect(process.env.MONGO_URL as string)
    .then(async () =>{
        const app = (await import('./config/app')).default
        app.listen(5000, () => {
            console.log('Server running at http://localhost/5000')
        })
    })
    .catch(console.error)

