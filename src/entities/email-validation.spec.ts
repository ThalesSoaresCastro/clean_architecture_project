import { Email } from './email'

describe('Email validation', () => {
  test('should not accept null strings', () => {
    const email = null as any
    expect(Email.validate(email)).toBeFalsy()
  })

  test('should not accept empty strings', () => {
    const email: string = ''
    expect(Email.validate(email)).toBeFalsy()
  })

  test('should accept valid email', () => {
    const email: string = 'any@email.com'
    expect(Email.validate(email)).toBeTruthy()
  })
})
