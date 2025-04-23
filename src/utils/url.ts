/**
 * Helper para componentes con rutas (href en <a> u otros), assets usando el BASE_URL
 *
 * @param path URL relativa (con o sin `/` es válido)
 */
export const url = (path = "") =>
  `${import.meta.env.BASE_URL}/${path}`
    .replace(/^\/+/, "/")
    .replace(/\/+$/, "/")
    .replace(/\/+/g, "/");

/** BASE_URL para componentes */
export const base_url: string = `${import.meta.env.BASE_URL}`;
