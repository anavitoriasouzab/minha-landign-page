// Leva quem entra pelo www para o endereço principal, entrega os arquivos do site
// e acrescenta os cabeçalhos de segurança em todas as respostas.
const DOMINIO = 'anavitoriaweb.com.br';

const SEGURANCA = {
  // Só abre por HTTPS, inclusive nas próximas visitas.
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
  // Impede que o site seja exibido dentro de outro site.
  'X-Frame-Options': 'DENY',
  'Content-Security-Policy': "frame-ancestors 'none'; base-uri 'self'; object-src 'none'",
  // O navegador não tenta adivinhar o tipo dos arquivos.
  'X-Content-Type-Options': 'nosniff',
  // Sites externos sabem só que a visita veio daqui, sem o caminho completo.
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  // O site não usa câmera, microfone nem localização.
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()'
};

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.hostname === 'www.' + DOMINIO) {
      url.hostname = DOMINIO;
      return Response.redirect(url.toString(), 301);
    }
    const original = await env.ASSETS.fetch(request);
    // Copia a resposta para poder acrescentar cabeçalhos.
    const resposta = new Response(original.body, original);
    for (const [nome, valor] of Object.entries(SEGURANCA)) resposta.headers.set(nome, valor);
    return resposta;
  }
};
