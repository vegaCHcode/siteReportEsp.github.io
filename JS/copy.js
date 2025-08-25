function copyToClipboard() {
    /* Get the text to be copied */
    var textToCopy = window.location.href;
    /* Create a temporary element to hold the text */
    var tempElement = document.createElement('textarea');
    /* Add the text to the element */
    tempElement.value = textToCopy;
    /* Add the element to the DOM */
    document.body.appendChild(tempElement);
    /* Select the text in the element */
    tempElement.select();
    /* Copy the text to the clipboard */
    document.execCommand('copy');
    /* Remove the temporary element */
    document.body.removeChild(tempElement);
  }