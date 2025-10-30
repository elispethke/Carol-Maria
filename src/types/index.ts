export interface Testimonial {
  id: number | string
  name: string
  text: string
  rating: number
  avatarUrl: string
  userId?: string
}

export interface Lesson {
  id: string
  title: string
  videoId: string
  description: string
  duration: string
}

export interface Module {
  id: string
  title: string
  lessons: Lesson[]
}

export interface Course {
  id: string
  name: string
  description: string
  price: number
  modules?: Module[]
  kiwifyLink: string
}

export interface Plan {
  id: string
  title: string
  description: string
  imageUrl: string
  price: string
  features: string[]
}

export interface CourseBanner {
  id: string
  title: string
  description: string
  price: string
  buttonText: string
  buttonLink: string
  imageUrl?: string
  highlight?: boolean
}
