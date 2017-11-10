export const
  valid_UTF_8_boundaries=
    Uint8Array(
      [
        0x00,                   // U+0000 lower limit single
        0x20,                   // U+0020 mid single
        0x7f,                   // U+007f upper limit single

        0xc2,0x80,              // U+0080 lower limit double
        0xd0,0xa0,              // U+0420 mid double
        0xdf,0xbf,              // U+07ff upper limit double

        0xe0,0xa0,0x80,         // U+0800 lower limit e0 triple
        0xe0,0xbf,0xbf,         // U+0fff upper limit e0 triple

        0xe1,0x80,0x80,         // U+1000 lower limit mid triple
        0xe7,0xa0,0xa0,         // U+7820 mid mid triple
        0xec,0xbf,0xbf,         // U+cfff upper limit mid triple

        0xed,0x80,0x80,         // U+d000 lower limit ed triple
        0xed,0x9f,0xbf,         // U+d7ff upper limit ed triple

        0xee,0x80,0x80,         // U+e000 lower limit upper triple
        0xef,0xbf,0xbf,         // U+ffff upper limit upper triple

        0xf0,0x90,0x80,0x80,    // U+10000 upper limit f0 quadruple
        0xf0,0xbf,0xbf,0xbf,    // U+3ffff upper limit f0 quadruple

        0xf1,0x80,0x80,0x80,    // U+40000 lower limit mid quadruple
        0xf2,0xa0,0xa0,0xa0,    // U+a0820 mid mid quadruple
        0xf3,0xbf,0xbf,0xbf,    // U+fffff upper limit mid quadruple

        0xf4,0x80,0x80,0x80,    // U+100000 lower limit f4 quadruple
        0xf4,0x8f,0xbf,0xbf     // U+10ffff upper limit f4 quadruple
        ])
