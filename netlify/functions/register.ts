export default async (req: Request) => {
  const body = await req.json();
  const data = {
    name: body.name,
    email: body.email,
    timestamp: new Date().toISOString()
  };

  console.log('Registrazione ricevuta:', data);

  return new Response(JSON.stringify({ success: true, message: 'Registrazione avvenuta' }), {
    headers: { 'Content-Type': 'application/json' },
    status: 200
  });
};