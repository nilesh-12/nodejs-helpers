

Can I use atob and btoa on JSON.stringify?
=>  
```js
    console.log("==stringifying..json==");
    const d = JSON.strigify({"A":[{"B":0}]});
    console.log("data:", d);
    console.log("==atob..on..data==");
    const ab = atob(d);
    console.log("==final..result==");
    console.log("final:", ab);
```
    
After trial of the above idea into node interpretor
```js
  > new_d = JSON.stringify({"A":[{"B":0}]});
  '{"A":[{"B":0}]}'
  > atob(new_d)
  Uncaught:
  DOMException [InvalidCharacterError]: Invalid character
      at __node_internal_ (node:internal/util:493:10)
      at atob (node:buffer:1247:13)
  > btoa(new_d)
  'eyJBIjpbeyJCIjowfV19'
  > atob(btoa(new_d))
  '{"A":[{"B":0}]}'
  > btoa(new_d)
  'eyJBIjpbeyJCIjowfV19'
  > .exit
```
