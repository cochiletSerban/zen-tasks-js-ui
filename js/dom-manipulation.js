import { getCSSVariable } from "./utils.js";
/**
 * Applies a background color to a given DOM element based on a CSS variable.
 *
 * @param {Element} element - The DOM element to which the background color will be applied.
 * @param {string} cssVariableName - The name of the CSS variable (e.g., '--primary-color').
 */
export function applyBackgroundColor(element, cssVariableName) {
  if (!element) return;
  element.style.backgroundColor = getCSSVariable(cssVariableName);
}

/**
 * Fetches a dog image from an API endpoint and updates the provided image element.
 *
 * @param {HTMLImageElement} imgElement - The image element to update.
 * @param {Object} [params={}] - Optional parameters.
 * @param {string} [params.endpoint='https://dog.ceo/api/breeds/image/random'] - The API endpoint from which to fetch the dog image.
 * @param {string} [params.altText='Random Dog Image'] - The alt text to set on the image element.
 * @param {Object} [params.style={}] - An object of additional styles to assign to the image element.
 * @returns {Promise<void>} A promise that resolves when the image element is updated.
 */
export async function updateImageWithDogImage(imgElement, params = {}) {
  if (!imgElement || !(imgElement instanceof HTMLImageElement)) {
    throw new Error("A valid HTMLImageElement must be provided.");
  }

  const {
    endpoint = "https://dog.ceo/api/breeds/image/random",
    altText = "Random Dog Image",
    style = {},
  } = params;

  try {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }
    const data = await response.json();
    // The dog image URL is expected to be in data.message.
    const imageUrl = data.message;

    // Update the image element.
    imgElement.src = imageUrl;
    imgElement.alt = altText;

    // Apply any additional styles.
    Object.assign(imgElement.style, style);
  } catch (error) {
    console.error("Error fetching dog image:", error);
  }
}
