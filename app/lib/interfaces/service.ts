import { category, personPhotos, review, servicePerson } from '@prisma/client';

export interface servicePersonExtended extends servicePerson {
  category: category;
  reviewMessages: review[];
  _count: {
    reviewMessages: number;
  };
  photos?: personPhotos[];
  rating: number;
}

export interface reviewExtended extends review {
  user: {
    first_name: string;
    last_name: string;
    imageUrl: string;
  };
}
