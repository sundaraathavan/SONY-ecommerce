import nc from 'next-connect';

const handler = nc();

handler.get(async (req, res) => {
  const categories = ['Interchangeable-lens Cameras', 'Lenses','Compact','Accessories'];
  res.send(categories);
});

export default handler;
