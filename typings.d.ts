type Base = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
};

interface ImageObject {
  _key?: string;
  alt: string;
  image: Image;
  isLandscape: boolean;
}

interface ImageCollection extends Base {
  title: string;
  description: string;
  images: ImageObject[];
}

interface Image {
  _type: 'image';
  asset: Reference;
}

interface Reference {
  _ref: string;
  _type: 'reference';
}
