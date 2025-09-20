import sanitizeHtml from 'sanitize-html'


console.log(sanitizeHtml('h1: <h1>I am in an h1 tag</h1>',  {allowedTags: ['h1'], allowedAttributes: {}}))
// console.log(sanitizeHtml('strong: <strong>I am in a strong tag</strong>'))
// console.log(sanitizeHtml('p: <p>I am in a p tag</p>'))
// console.log(sanitizeHtml('style: <style>I am in a style tag</style>'))
// console.log(sanitizeHtml('script: <script>I am in a script tag</script>'))