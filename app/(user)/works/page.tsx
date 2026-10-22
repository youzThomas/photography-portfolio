import { client } from '../../../lib/sanity.client';
import { groq } from 'next-sanity';
import MasonryGallery from '../../components/MasonryGallery';

const query = groq`
  *[_type == "imageCollection"]
  | order(
      select(
        title == "Urban" => 0,
        title == "Nature" => 1,
        title == "Lifestyle" => 2,
        title == "Shot on iPhone" => 3,
        title == "Sport" => 4,
        999
      ) asc
    )
`;

export default async function Works() {
  const collections = await client.fetch(query);
  return (
    <div className='content-page'>
      <h1 className='page-heading'>Works</h1>

      {collections.length ? <MasonryGallery collections={collections} /> : <p className='muted'>New collections are on their way.</p>}
    </div>
  );
}
