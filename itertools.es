export const
  iterable_map=
    operator=>
      function*map(iterable){
        const iterator=iterable[Symbol.iterator]()
        while(true){
          let {done,value}=iterator.next()
          if(done) return value
          yield operator(value)}}
 ,iterable_filter=
    predicate=>
      function*filter(iterable){
        const iterator=iterable[Symbol.iterator]()
        while(true){
          let {done,value}=iterator.next()
          if(done) return value
          if(predicate(value)) yield value
          else continue}}
 ,iterable_find=
    predicate=>
      function*find(iterable){
        const iterator=iterable[Symbol.iterator]()
        while(true){
          let {done,value}=iterator.next()
          if(done) return void 0
          if(predicate(value)) return value
          else continue}}
 ,iterable_some=
    predicate=>
      function*some(iterable){
        const iterator=iterable[Symbol.iterator]()
        while(true){
          let {done,value}=iterator.next(),cond
          if(done) return false
          if(cond=predicate(value)) return cond
          else continue}}
 ,iterable_every=
    predicate=>
      function*every(iterable){
        const iterator=iterable[Symbol.iterator]()
        while(true){
          let {done,value}=iterator.next(),cond
          if(done) return true
          if(!predicate(value)) return false
          else continue}}
 ,iterable_any=
    predicate=>
      function*any(iterable){
        const iterator=iterable[Symbol.iterator]()
        while(true){
          let {done,value}=iterator.next(),cond
          if(done) return false
          if(predicate(value)) return true
          else continue}}
 ,iterable_reduce_left=
    combiner=>
      defaultvalue=>
        function*reduce_left(iterable){
          const iterator=iterable[Symbol.iterator]()
          let {done,value:acc}=iterator.next()
          if(done) return defaultvalue
          while(true){
            let {done,value}=iterator.next()
            if(done) return acc
            yield acc=combiner(acc)(value)}}
 ,iterable_reduce_right=
    combiner=>
      defaultvalue=>
        function*reduce_right(iterable){
          const iterator=iterable[Symbol.iterator]()
          let {done,value:acc}=iterator.next()
          if(done) return defaultvalue
          while(true){
            yield acc
            let {done,value}=iterator.next()
            if(done) return acc
            acc=combiner(value)(acc)}}
 ,iterable_fold_left=
    combiner=>
      initialvalue=>
        function*fold_left(iterable){
          const iterator=iterable[Symbol.iterator]()
          let acc=initialvalue
          while(true){
            let {done,value}=iterator.next()
            if(done) return acc
            yield acc=combiner(acc)(value)}}
 ,iterable_fold_right=
    combiner=>
      initialvalue=>
        function*fold_right(iterable){
          const iterator=iterable[Symbol.iterator]()
          let acc=initialvalue
          while(true){
            yield acc
            let {done,value}=iterator.next()
            if(done) return acc
            acc=combiner(value)(acc)}}
 ,iterable_zip_shortest=
    zipper=>
      function*zip_shortest(...iterables){
        const iterators=iterables.map(it=>it[Symbol.iterator]())
        while(true){
          let iterations=iterators.map(it=>it.next())
          if(iterations.some(it=>done))return
          yield zipper(iterations.map(it=>it.value))}}
 ,iterable_zip_longest=
    zipper=>
      function*zip_longest(...iterables){
        const iterators=iterables.map(it=>it[Symbol.iterator]())
        while(true){
          let iterations=iterators.map(it=>it.next())
          if(iterations.every(it=>done))return
          yield zipper(iterations.map(it=>it.value))}}
 ,iterable_chain=
    function*chain(...iterables){
      for(const iterable of iterables)
        yield* iterable}
