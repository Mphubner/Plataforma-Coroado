import https from 'https';

https.get('https://coroado.org', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    const cssFiles = data.match(/<link[^>]+rel="stylesheet"[^>]+href="([^">]+)"/gi);
    if (cssFiles) {
      console.log(cssFiles.join('\n'));
    }
  });
});
