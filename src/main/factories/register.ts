import { RegisterUserController } from '@/web-controllers/'
import { RegisterUserOnMailingList } from '@/usecases/register-user-on-mailing-list'
import { InMemoryUserRepository } from '@/usecases/register-user-on-mailing-list/repository'
import {MongodbUserRepository} from '@/external/repositories/mongodb';

export const makeRegisterUserController = (): RegisterUserController =>{

    //const inMemoryUserRepository = new InMemoryUserRepository([])
    const MongoDbUserRepository = new MongodbUserRepository();
    //const registerUserOnMailingListUseCase = new RegisterUserOnMailingList(inMemoryUserRepository)
    const registerUserOnMailingListUseCase = new RegisterUserOnMailingList(MongoDbUserRepository) 
    const registerUserController = new RegisterUserController(registerUserOnMailingListUseCase)

    return registerUserController
}