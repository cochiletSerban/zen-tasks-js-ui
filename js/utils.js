/**
 * Retrieves the value of a CSS custom property from the specified element.
 *
 * @param {string} variableName - The name of the CSS custom property (e.g. '--primary-color').
 * @param {Element} [element=document.documentElement] - The element to get the computed style from. Defaults to the root element.
 * @returns {string} The trimmed computed value of the CSS variable.
 */

export function getCSSVariable(
  variableName,
  element = document.documentElement
) {
  return getComputedStyle(element).getPropertyValue(variableName).trim();
}

// could pass in an array of specific stylesheets for optimization
export function getAllCSSVariableNames(styleSheets = document.styleSheets) {
  var cssVars = [];
  // loop each stylesheet
  for (var i = 0; i < styleSheets.length; i++) {
    // loop stylesheet's cssRules
    try {
      // try/catch used because 'hasOwnProperty' doesn't work
      for (var j = 0; j < styleSheets[i].cssRules.length; j++) {
        try {
          // loop stylesheet's cssRules' style (property names)
          for (var k = 0; k < styleSheets[i].cssRules[j].style.length; k++) {
            let name = styleSheets[i].cssRules[j].style[k];
            // test name for css variable signiture and uniqueness
            if (name.startsWith("--") && cssVars.indexOf(name) == -1) {
              cssVars.push(name);
            }
          }
        } catch (error) {}
      }
    } catch (error) {}
  }
  return cssVars;
}

/**
 * Formats a Date object according to the given style.
 *
 * @param {Date} date - The date to format.
 * @param {string} style - The format style: "numeric" or "monthname".
 * @returns {string} The formatted date string.
 * @throws {Error} If the style is unsupported.
 */
export function formatDate(date, style) {
  const day = String(date.getDate()).padStart(2, "0"); // Ensure two-digit day
  const year = date.getFullYear();

  if (style === "numeric") {
    const month = String(date.getMonth() + 1).padStart(2, "0"); // 0-based month, so add 1
    return `${day}/${month}/${year}`;
  } else if (style === "monthname") {
    // Define abbreviated month names (in lowercase)
    const monthAbbr = [
      "jan",
      "feb",
      "mar",
      "apr",
      "may",
      "jun",
      "jul",
      "aug",
      "sep",
      "oct",
      "nov",
      "dec",
    ];
    const month = monthAbbr[date.getMonth()]; // getMonth() returns 0–11
    // Optionally, you can pad the day if needed; here we use unpadded for natural look.
    return `${date.getDate()} ${month} ${year}`;
  } else {
    throw new Error(`Unsupported style format: ${style}`);
  }
}

/**
 * Returns a random index from the given array.
 *
 * @param {Array} arr - The array to choose an index from.
 * @returns {number} A random index (between 0 and arr.length - 1).
 * @throws {Error} If the input is not a non-empty array.
 */
export function getRandomIndex(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    throw new Error("Expected a non-empty array");
  }
  return Math.floor(Math.random() * arr.length);
}
