# UTF-8
A simple piece of code that can encode a unicode character in a ecmascript string or a unicode code point in a uint32 as a UTF-8 Uint8Array, and can decode an array of uint8 representing UTF-8 code units into a uint32 unicode code point.
## Testing
Current testing code is simply the examples written for http://rosettacode.org/wiki/UTF-8_encode_and_decode#JavaScript and while good examples of its handling of various length code points, should be replaced with some thing that explores all the valid boundaries and some midpoints and tests that they succeed, and something that explores all the invalid boundaries and tests that they fail.
