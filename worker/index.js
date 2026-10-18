// Leva quem entra pelo www para o endereço principal e entrega os arquivos do site.
const DOMINIO = 'anavitoriaweb.com.br';

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.hostname === 'www.' + DOMINIO) {
      url.hostname = DOMINIO;
      return Response.redirect(url.toString(), 301);
    }
    return env.ASSETS.fetch(request);
  }
};
