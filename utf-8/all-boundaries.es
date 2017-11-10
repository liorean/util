export const
  all_UTF_8_boundaries=
    Uint8Array(
      [
        0x00,                   // U+0000 lower limit single
        0x7f,                   // U+007f upper limit single

        0x80,                   // lower limit continuation
        0xbf,                   // upper limit continuation

        0xc0,                   // invalid overlong encoding (double)
        0xc1,                   // invalid overlong encoding (double)

        0xc2,0x80,              // U+0080 lower limit double
        0xdf,0xbf,              // U+07ff upper limit double

        0xe0,0x80,              // invalid overlong encoding (triple)
        0xe0,0x9f,              // invalid overlong encoding (triple)

        0xe0,0xa0,0x80,         // U+0800 lower limit e0 triple
        0xe0,0xbf,0xbf,         // U+0fff upper limit e0 triple

        0xe1,0x80,0x80,         // U+1000 lower limit mid triple
        0xec,0xbf,0xbf,         // U+cfff upper limit mid triple

        0xed,0x80,0x80,         // U+d000 lower limit ed triple
        0xed,0x9f,0xbf,         // U+d7ff upper limit ed triple

        0xed,0xa0,              // invalid surrogate pair encoding (triple)
        0xed,0xbf,              // invalid surrogate pair encoding (triple)

        0xee,0x80,0x80,         // U+e000 lower limit upper triple
        0xef,0xbf,0xbf,         // U+ffff upper limit upper triple

        0xf0,0x80,              // invalid overlong encoding (quadruple)
        0xf0,0x8f,              // invalid overlong encoding (quadruple)

        0xf0,0x90,0x80,0x80,    // U+10000 upper limit f0 quadruple
        0xf0,0xbf,0xbf,0xbf,    // U+3ffffupper limit f0 quadruple

        0xf1,0x80,0x80,0x80,    // U+40000 lower limit mid quadruple
        0xf3,0xbf,0xbf,0xbf,    // U+fffff upper limit mid quadruple

        0xf4,0x80,0x80,0x80,    // U+100000 lower limit f4 quadruple
        0xf4,0x8f,0xbf,0xbf,    // U+10ffff upper limit f4 quadruple

        0xf4,0x90,              // Unicode character range exceeded (quadruple)
        0xf4,0xbf,              // Unicode character range exceeded (quadruple)

        0xf5,                   // Unicode character range exceeded (quadruple)
        0xf7,                   // Unicode character range exceeded (quadruple)

        0xf8,                   // Unicode character range exceeded (quintuple)
        0xfb,                   // Unicode character range exceeded (quintuple)

        0xfc,                   // Unicode character range exceeded (sextuple)
        0xfd,                   // Unicode character range exceeded (sextuple)

        0xfe,                   // Unicode character range exceeded (septuple)

        0xff])                  // Unicode character range exceeded (infinite)