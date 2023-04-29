interface SanityBody {
  _createdAt: string,
  _id: string,
  _rev: string,
  _updateAt: string
}

interface Image {
  _type: "image",
  asset: {
    _ref: string,
    type: "reference"
  }
}

export interface PageInfo extends SanityBody {
  _type: "pageInfo",
  address: string,
  backgroundInformation: string,
  email: string,
  role: string,
  heroImage: Image,
  name: string,
  phoneNumber: string,
  profilePic: Image
}

export interface Technology extends SanityBody {
  _type: "skill",
  image: Image,
  title: string,
  progress: number,
}

export interface Skill extends SanityBody {
  _type: "skill",
  image: Image,
  title: string,
  progress: number,
}

export interface Experience extends SanityBody {
  _type: "experience",
  company: string,
  companyImage: Image,
  dateStarted: date,
  dateEnded: date,
  isCurrentlyWorkingHere: boolean,
  jobTitle: string,
  points: string[],
  technologies: Technology[]
}

export interface Education extends SanityBody {
  _type: "education",
  school: string,
  dateStarted: date,
  dateEnded: date,
  major: string,
  activity: string,
}

export interface Social extends SanityBody {
  _type: "social",
  title: string,
  url: string,
}
