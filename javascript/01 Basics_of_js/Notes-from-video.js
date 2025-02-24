/* What is Template literals in js.
answers: It is replacement of string contination with some extra features. we can embed expressions and variables in a very concise and easy to understand way.
in short it does string interpolation instead of string concatenation.
*/


function sayHello(strings, ...values) {
    console.log("LOG:", strings, values);

}
const greet = 'Happy Birthday'
const name = 'Maya'
const birthNum = '28th'
sayHello`${greet} ${name} on your ${birthNum} birthday`
sayHello`wish you ${greet} dear ${name} on your ${birthNum} birthday`


/**
 * ===============================
 *  Tagged Template Literals - Notes
 * ===============================
 * 
 * Tagged template literals allow customization of string processing
 * by passing a function (tag) that modifies the template string.
 * Useful for security, formatting, UI generation, localization, etc.
 */

// ===============================
// 1️⃣ Preventing XSS (Cross-Site Scripting) Attacks
// ===============================
function sanitize(strings, ...values) {
    return strings.reduce((acc, str, i) => {
        let safeValue = String(values[i - 1])
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;"); // Escaping HTML tags
        return acc + safeValue + str;
    });
}

const userReview = "<script>alert('Hacked!')</script>";
const safeReview = sanitize`User review: ${userReview}`;
console.log(safeReview); 
// Output: User review: &lt;script&gt;alert('Hacked!')&lt;/script&gt;


// ===============================
// 2️⃣ Formatting Currency and Prices
// ===============================
function formatCurrency(strings, ...values) {
    return strings.reduce((acc, str, i) => {
        let formattedValue = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(values[i - 1] || "");
        return acc + formattedValue + str;
    });
}

const productPrice = 499.99;
const priceTag = formatCurrency`Price: ${productPrice}`;
console.log(priceTag);  
// Output: Price: $499.99


// ===============================
// 3️⃣ Generating Dynamic HTML Components
// ===============================
function html(strings, ...values) {
    return strings.reduce((acc, str, i) => acc + (values[i - 1] || "") + str);
}

const product = {
    name: "Wireless Headphones",
    price: "$149.99",
    description: "Noise-cancelling, Bluetooth-enabled headphones."
};

const productCard = html`
    <div class="product-card">
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <span class="price">${product.price}</span>
        <button>Add to Cart</button>
    </div>
`;

console.log(productCard);
// Can be inserted into the DOM using document.body.innerHTML = productCard;


// ===============================
// 4️⃣ Localization (i18n) for Multi-Language Support
// ===============================
const translations = {
    en: { greeting: "Hello", product: "Laptop" },
    fr: { greeting: "Bonjour", product: "Ordinateur Portable" }
};

function translate(lang) {
    return (strings, ...values) => {
        return strings.reduce((acc, str, i) => acc + (values[i - 1] ? translations[lang][values[i - 1]] : "") + str);
    };
}

const lang = "fr"; // User-selected language
const t = translate(lang);

console.log(t`${"greeting"}! Check out our latest ${"product"}!`);
// Output: "Bonjour! Check out our latest Ordinateur Portable!"


// ===============================
// 5️⃣ Logging & Debugging
// ===============================
function log(strings, ...values) {
    console.log(`[LOG]: ${strings.reduce((acc, str, i) => acc + (values[i - 1] || "") + str)}`);
}

const apiEndpoint = "/api/products";
const status = 200;
const responseTime = "120ms";

log`API: ${apiEndpoint} | Status: ${status} | Response Time: ${responseTime}`;
// Output: [LOG]: API: /api/products | Status: 200 | Response Time: 120ms


/**
 * ===============================
 * Benefits of Tagged Templates in an E-Commerce App
 * ===============================
 * 
 * ✅ XSS Prevention (Sanitize user input)
 * ✅ Currency Formatting (Consistent price display)
 * ✅ Dynamic HTML Generation (Avoids unsafe innerHTML)
 * ✅ Localization (i18n for multi-language support)
 * ✅ Logging & Debugging (Better structured logs)
 */

/**
 * ===============================
 * 📌 Tagged Templates in React - Notes
 * ===============================However, setTimeout does not capture the value of i at that moment, it captures a reference to i.
 *
 * ❓ Are tagged templates necessary in React?
 * ➡ No, but they can be useful in specific cases.
 *
 * ✅ When Tagged Templates Can Be Useful:
 * ----------------------------------------
 * 1️⃣ **Styled Components** (Writing CSS in JS)
 *    - Used in libraries like `styled-components` for dynamic styling.
 *    - Example:
 */
import styled from 'styled-components';

const Button = styled.button`
  background: ${(props) => (props.primary ? "blue" : "gray")};
  color: white;
`;

export default function App() {
  return <Button primary>Click Me</Button>;
}

/**
 * 2️⃣ **Sanitizing User Input (Preventing XSS)**
 *    - Avoids injecting malicious scripts.
 *    - Example:
 */
function sanitize(strings, ...values) {
  return strings.reduce((acc, str, i) => {
    let safeValue = String(values[i - 1]).replace(/</g, "&lt;").replace(/>/g, "&gt;");
    return acc + safeValue + str;
  });
}

function SafeComponent({ userInput }) {
  return <p>{sanitize`User input: ${userInput}`}</p>;
}

/**
 * 3️⃣ **Localization & String Formatting (i18n)**
 *    - Helps in translating text dynamically.
 */

/**
 * ❌ When Tagged Templates Are Not Needed:
 * ----------------------------------------
 * - JSX already handles templating efficiently.
 * - React’s built-in features (state, props) handle dynamic content.
 * 
 * 🔥 Final Verdict:
 * ------------------
 * ✅ Not necessary but useful for styling, sanitization, and localization.
 */
