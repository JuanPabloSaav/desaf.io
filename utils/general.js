/**
 * Scripts de utilidades generales para la pagina
 */


/**
 * Carga un template HTML desde un archivo externo y lo devuelve como un elemento de template.
 * @param {string} url - La URL del archivo HTML que contiene el template.
 * @param {string} templateId - El ID del elemento de template dentro del archivo HTML.
 * @returns {Promise<HTMLTemplateElement>} - Una promesa que se resuelve con el elemento de template cargado.
 */
export async function getTemplate(url, templateId) {

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Error al cargar template desde ${url}: ${res.status}`);
  }

  //obtiene el texto HTML del template en texto plano del archivo html
  const htmlText = await res.text();

  //formatea el texto HTML para que sea legible
  const document = new DOMParser().parseFromString(htmlText, "text/html");

  //obtiene el template del documento HTML
  const template = document.getElementById(templateId);

  //se valida que exista el template, si no existe se lanza un error
  if (!template) {
    throw new Error(`No se encontró el template con id ${templateId} en ${url}`);
  }

  //adivina adivinador
  return template;
}

function getTemplateStylesheet(template) {
  if (!template || !template.getAttribute('data-stylesheet')) {
    console.error('El template no tiene un atributo data-stylesheet');
    throw new Error('El template no tiene un atributo data-stylesheet');
  }
  console.log('El template tiene un atributo data-stylesheet:', template.getAttribute('data-stylesheet'));
  return template.getAttribute('data-stylesheet');
}

/**
 * Agrega un link al head del documento para cargar el stylesheet del template.
 * @param {HTMLTemplateElement} template - El elemento de template que contiene el atributo data-stylesheet.
 */
export function addLinkToHead(template) {
  const templateStylesheet = getTemplateStylesheet(template);
  const objectiveHead = document.querySelector("head");
  objectiveHead.insertAdjacentHTML('beforeend', `<link rel="stylesheet" href="${templateStylesheet}">`);
}

