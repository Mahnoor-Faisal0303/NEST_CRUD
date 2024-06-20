import { Injectable } from '@nestjs/common';
import { User } from './users.model';

@Injectable()
export class UsersService {
    public users: User[] = [
        {
            username: 'User1',
            password: 'password',
            email: 'user1@gmail.com'
        },
        {
            username: 'User2',
            password: 'password',
            email: 'user2@gmail.com'
        },
        {
            username: 'User3',
            password: 'password',
            email: 'user3@gmail.com'
        }
    ]
    getUserByUserName(userName: string): User{
        return this.users.find((user:User)=>user.username===userName);
    }
}


