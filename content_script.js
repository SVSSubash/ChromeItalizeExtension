
function addStylesheetRules (rules) {

     const style = '<style type="text/css"> * { font-style: italic !important;}</style>';

     document.head.insertAdjacentHTML("beforeend", style);
}

console.log("Starting");

addStylesheetRules();

console.log("Done");

