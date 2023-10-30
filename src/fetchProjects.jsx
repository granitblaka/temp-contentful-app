import { createClient } from 'contentful';
import { useEffect } from 'react';
import { useState } from 'react';

const client = createClient({
  space: 't7iwo49skpnw',
  accessToken: import.meta.env.VITE_API_KEY,
});

export const useFetchProjects = () => {
  const [loading, setLoading] = useState('true');
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    try {
      const response = await client.getEntries({
        content_type: 'projects',
      });
      const projects = response.items.map((project) => {
        const { title, url, image } = project.fields;
        const id = project.sys.id;
        const img = image?.fields?.file?.url;
        return { title, url, img, id, image };
      });
      setProjects(projects);

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return { loading, projects };
};
