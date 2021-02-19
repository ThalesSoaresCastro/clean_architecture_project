import {MongoHelper} from '@/external/repositories/mongodb/helper';

import {MongodbUserRepository} from '@/external/repositories/mongodb'

describe('Mongodb User repository', () => {
    beforeAll(async () => {
        return await MongoHelper.connect(process.env.MONGO_URL as string);
    })

    afterAll(async ()=>{
        await MongoHelper.disconnect()
    })

    beforeEach(async () =>{
        MongoHelper.clearCollection('users')
    })

    test('when user is added, it should exist', async () => {
        const UserRepository = new MongodbUserRepository()
        const user = {
            name: 'any_name',
            email: 'avy@mail.com'
        }
        await UserRepository.add(user)
        expect(await UserRepository.exists(user)).toBeTruthy()
    })

    test('find all users should return all added users', async () =>{
        const userRepository = new MongodbUserRepository()
        await userRepository.add({
            name:'any_name',
            email: 'any@mail.com'
        })
        await userRepository.add({
            name:'second_name',
            email: 'second@mail.com'
        })

        const users = await userRepository.findAllUsers()
        expect(users[0].name).toEqual('any_name')
        expect(users[1].name).toEqual('second_name')
    })
})