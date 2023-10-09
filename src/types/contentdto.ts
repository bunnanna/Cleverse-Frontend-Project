import { UserDTO } from './authdto'

export interface ContentDTO {
  id: number
  videoTitle: string
  videoUrl: string
  comment: string
  rating: number
  thumbnailUrl: string
  creatorName: string
  creatorUrl: string
  postedBy: UserDTO
  createdAt: string
  updatedAt: string
}

export interface ContentsDTO {
  data: ContentDTO[]
}

export interface CreateContentDTO {
  videoUrl: string
  comment: string
  rating: number
}

export interface UpdateContentDTO {
  comment: string
  rating: number
}
