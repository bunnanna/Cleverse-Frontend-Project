interface IAuthor {
  id: string
  username: string
  name: string
  registeredAt: string
}

export interface IContentDTO {
  id: number
  videoTitle: string
  videoUrl: string
  comment: string
  rating: number
  thumbnailUrl: string
  creatorName: string
  creatorUrl: string
  createdAt: string
  updatedAt: string
  postedBy: IAuthor
}
