# genid

genid is an id generator.

## Installation

`npm install @spider_webs/genid`

this will add the module as your dependency.

## Usage

To use it is very simple, just import the package

```javascript
const genid = require("@spider_webs/genid");
```

Then by default genid will create a random id by the format (nnnnnllnn*lll_nlnl_nll) <br>
'n' stands for number and 'l' stands for letter. The only separator available at the <br>
moment is by using underscore '*'.

To create your custom id format, just simply add the format as the parameter. For instance, <br>
to create a random id with five numbers I can pass 'nnnnn' to generate five random numbers.

```javascript
console.log(genid("nnnnn"));
```

and it should give a random number similar to this `23749`.

<br>
<br>
<br>
### Contact
[facebook](https://web.facebook.com/josh.alphadroid)
[email](joshmatthewtalplacido@gmail.com)
[github](https://joshmatthew.github.io)
