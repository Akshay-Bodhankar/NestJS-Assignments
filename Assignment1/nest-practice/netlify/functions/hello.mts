export default async () => {
  return new Response('Hello from HelloController!', {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
    },
  });
};

export const config = {
  path: '/hello',
};