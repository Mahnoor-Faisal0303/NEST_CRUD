import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from 'passport-local';
import { UsersService } from "src/users/users.service";
import { User } from "src/users/users.model";
import { Injectable, UnauthorizedException } from "@nestjs/common";

@Injectable()
 export class LocalStrategy extends PassportStrategy(Strategy) {

    constructor(private readonly userService: UsersService){
        super();                                                 //super() refers to the extended class
    }
    validate(username:string , password:string): User{
            const user :User = this.userService.getUserByUserName(username);
            if(user===undefined) throw new UnauthorizedException();
            if(user!=undefined && user.password===password){
                return user;
            }
            else {
                throw new UnauthorizedException();
            }
    }
 }
