import passport from 'passport'
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt'
import User from '../models/user.js'




const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'kuldeep'
}






passport.use( new JwtStrategy(options,async function (jwt_payload, done) {


    console.log(jwt_payload)

    const user =await User.findOne({ username: jwt_payload.username })
     if(user){
        done(null,user)
     }else{
        done(null,false)
     }


}))

