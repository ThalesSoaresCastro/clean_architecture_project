import { UserRepository } from '@/usecases/register-user-on-mailing-list/ports'
import { UserData } from '@/entities'

export class InMemoryUserRepository implements UserRepository {
    private repository: UserData[];

    constructor (repository: UserData[]) {
      this.repository = repository
    }

    async add (user: UserData): Promise<void> {
      const exists = await this.exists(user)
      if (!exists) {
        this.repository.push(user)
      }
    }

    async findUserByEmail (email: string): Promise<UserData> {
      const users = this.repository.filter((user) => {
        return user.email === email
      })
      if (users.length > 0) {
        return users[0]
      }
      return null as any

    //   const found = this.repository.find(user => { user.email === email });
    //   return found || null as any;
    }

    async findAllUsers (): Promise<UserData[]> {
      return this.repository
    }

    async exists (user: UserData): Promise<boolean> {
      if (await this.findUserByEmail(user.email) === null) {
        return false
      }
      return true
    }
}
