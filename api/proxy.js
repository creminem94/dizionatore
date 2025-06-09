export default async function handler(req, res) {
  const fetch = (await import('node-fetch')).default;

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Solo POST consentito' });
  }

  try {
    const response = await fetch('https://www.dizionatore.it/prod/diziona.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: req.body
    });

    const data = await response.json();
    return res.status(200).json(data);

  } catch (error) {
    return res.status(500).json({ error: 'Errore durante il proxy della richiesta', details: error.message });
  }
}
