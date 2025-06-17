import Joi from 'joi'


const loginSchema = Joi.object(
    {
        username:Joi.string().required(),
        password:Joi.string().required()
    }
)
export async function  checkBody(req, res, next) {
    // 
    try {
        const {error,value} = await loginSchema.validate(req.body)
        
        if(error) throw new Error(error)
        next()
    } catch (error) {
        res.send(417)
        
    }

    console.log(validate)
    

}

