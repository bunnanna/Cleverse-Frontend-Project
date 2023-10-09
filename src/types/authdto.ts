export interface UserDTO {
  id: string
  username: string
  name: string
  registeredAt: string
}

export interface LoginDTO {
  username: string
  password: string
}

export interface RegisterDTO {
  username: string
  password: string
  name: string
}

export interface CredentialDTO {
  accessToken: string
}
