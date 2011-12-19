# Rotten Clam

yet another unittest library for javascirpt. it is simple, easy to use.
if you find simplest unittest library, this is it. 

## Usage

First of all rotten clam work with [jQuery](http://jquery.com) you should include it.

    <html>
      <head>
        <link rel="stylesheet" type="text/css" href="./rotten_clam/rotten_clam.css" />
        <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.js"></script>
        <script type="text/javascript" src="./rotten_clam/rotten_clam.js"></script>

        ....

after all you can use rotten clam like this example.

    <body>
      <script type="text/javascript">
        rottenClam.initialize('your unittest name');
        rottenClam.ok(true, 'True test');
        rottenClam.fail(false, 'Fail test');
      </script>
    </body>
    </html>

## Documents

### rottenClam.initialize(unittestName)

 - unittestName: a name of unittest. 

It generate header of unittest it must be called before unittest.

### rottenClam.ok(boolean, message)

 - boolean: boolean type result.
 - message: a message of test.

A boolean assertation.

### rottenClam.fail(boolean, message)

 - boolean: boolean type result.
 - message: a message of test.

A boolean assertation. equivalent to `rottenClam.equal(boolean, fail, message)`

### rottenClam.equal(result, expected, message)

  - result: a result of operation.
  - expected: a expected value.
  - message: a message of test.

A assertation for all type (number, string, object). However it didn't support function assertatoin.

## Examples

A number, string, object assertation.

    rottenClam.equal(1, 1, 'Number Success test');
    rottenClam.equal(1, 2, 'Number Fail test');
    rottenClam.equal('string', 'string', 'String success test');
    rottenClam.equal('string', 'string', 'String fail test');
    rottenClam.equal([1,2,3], [1,2,3], 'Array success test');
    rottenClam.equal([1,2,3], [1,2,3,4], 'Array fail test');
    rottenClam.equal({a:1, b:2}, {a:1, b:2}, 'Object success test');
    rottenClam.equal({a:1, b:2}, {a:1}, 'Object Fail test 1');
    rottenClam.equal({a:1}, {a:1, b:2}, 'Object Fail test 2');
    rottenClam.equal({a:1}, {a:2}, 'Object Fail test 3');

A boolean asseration.

    rottenClam.ok(true, 'True test');
    rottenClam.fail(false, 'Fail test');
