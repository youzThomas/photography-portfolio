import { client } from '../../../lib/sanity.client';
import { groq } from 'next-sanity';
import MasonryGallery from '../../components/MasonryGallery';

const query = groq`
  *[_type == "imageCollection"]
  | order(
      select(
        title == "Urban" => 4,
        title == "Nature" => 3,
        title == "Lifestyle" => 2,
        title == "Shot on iPhone" => 1,
        title == "Sport" => 0,
        999
      ) asc
    )
`;

export default async function Works() {
  const collections = await client.fetch(query);
  console.log(collections);
  return (
    <div className='px-4 lg:px-8'>
      <h1 className='font-ovo text-5xl mb-8 mt-5'>Works</h1>
      <div className='border-b rounded w-2/6 mx-auto my-8'></div>

      <MasonryGallery collections={collections} />
    </div>
  );
}
