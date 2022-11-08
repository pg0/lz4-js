# lz4-js
LZ4 decoding in the browser

## Scenario
LZ4 encoded File are on the Server
client decodes them on the fly via browser

``` js
  window.onload = function () {
      f.onchange = function (e) {
          var fr = new FileReader;
          fr.readAsArrayBuffer(e.target.files[0]);
          fr.onload = function () {
              var s = new Uint8Array(fr.result);

              console.log('ArrayBuffer: ' + s.byteLength + ' bytes');

              var start = Date.now();
              var c = lz4.compress(s);
              result.innerHTML += '<div>compress: ' + (Date.now() - start) + 'ms</div>';
              result.innerHTML += '<div>' + c + '</div>';

              console.log('compressed: ' + c.byteLength + ' bytes');

              start = Date.now();
              var d = lz4.decompress(c);
              result.innerHTML += '<div>decompress: ' + (Date.now() - start) + 'ms</div>';
              result.innerHTML += '<div>' + d + '</div>';

              console.log('decompressed: ' + d.byteLength + ' bytes');

              var text = new TextDecoder("utf-8").decode(d);
              result.innerHTML += '<div>' + text + '</div>';

              console.log('text: ' + text.length);

          }
      };
  };
```


## Dependencies

LZ4.js is from https://github.com/ukyo/lz4.js
