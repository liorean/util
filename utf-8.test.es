
const
  str=
    'AöЖ€𝄞'
 ,cps=
    Uint32Array.from(str,s=>s.codePointAt(0))
 ,cus=
    [ [0x41]
     ,[0xc3,0xb6]
     ,[0xd0,0x96]
     ,[0xe2,0x82,0xac]
     ,[0xf0,0x9d,0x84,0x9e]]
   .map(a=>Uint8Array.from(a))
 ,zip3=
    ([a,...as],[b,...bs],[c,...cs])=>
      0<as.length+bs.length+cs.length
     ?[[a,b,c],...zip3(as,bs,cs)]
     :[[a,b,c]]
 ,inputs=zip3(str,cps,cus);

console.log(`\
${'Character'.padEnd(16)}\
${'CodePoint'.padEnd(16)}\
${'CodeUnits'.padEnd(16)}\
${'uft8encode(ch)'.padEnd(16)}\
${'uft8encode(cp)'.padEnd(16)}\
utf8decode(cu)`)
for(let [ch,cp,cu] of inputs)
  console.log(`\
${ch.padEnd(16)}\
${cp.toString(0x10).padStart(8,'U+000000').padEnd(16)}\
${`[${[...cu].map(n=>n.toString(0x10))}]`.padEnd(16)}\
${`[${[...utf8encode(ch)].map(n=>n.toString(0x10))}]`.padEnd(16)}\
${`[${[...utf8encode(cp)].map(n=>n.toString(0x10))}]`.padEnd(16)}\
${utf8decode(cu).toString(0x10).padStart(8,'U+000000')}`)
