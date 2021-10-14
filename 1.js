var obj1=[
    {
     "a":"001",
     "b":"a",
     "c":"1",
    'd':1,
    'e':1,
     },
    {
     "a":"001",
     "b":"b",
     "c":"2",
     'd':2,
     'e':2,
     },
    {
     "a":"001",
     "b":"c",
     "c":"3",
     'd':3,
     'e':3,
     },
   {
     "a":"002",
     "b":"a",
     "c":"4",
     'd':4,
     'e':4,
     },
  {
     "a":"002",
     "b":"b",
     "c":"5",
     'd':4,
     'e':5,
     },
  {
     "a":"002",
     "b":"b",
     "c":"6",
     'd':6,
     'e':6,
  }
  ]


  function createTree(arr,keys) {
    function createObj(arr, arrORobj, keys, start) {
      for (let i = 0; i < arr.length; i++) {
        // 当不存在一个排序的key，返回[]
        if (start >= keys.length) {
          let newArray=Array.isArray(arrORobj)?arrORobj:[]
          return newArray.concat(arr[i])
        }
        let curKey = keys[start]
        let curVal = arr[i][curKey]
        if(!curVal) continue
        // 存在key对应的值存在，传入{}构造
        let newObj = arrORobj[curVal] ? arrORobj[curVal] : {}
        arrORobj[curVal] = createObj([arr[i]], newObj, keys, start + 1)
      }
      // 存在一个排序的key，返回{}
      return arrORobj
    }
    return createObj(arr,{},keys,0)
  }
  
//   console.log('11',createTree(obj1,['a','b']));
  

  const DIC = createTree(obj1,['a','b' ])

  let arrs = []
// console.log(DIC);

for( var key in DIC ){
    var value = DIC[key]
    var obj = {}
    obj['a'] = key
    obj['params']=[]
    for (const j in value) {
        const b = value[j]
        
       
        var obj2 = {
            'b':j
        }

        obj2['list']=[]

        // console.log('b', b);
        for (const k in b) {
            var obj3 = {}
            const kb = b[k]
            
            obj3.c = kb.c
            obj3.d = kb.d
            obj3.e = kb.e
          
            obj2['list'].push(obj3)
    
    
        }




        obj['params'].push(obj2)
        


    }
    // console.log( key+' : '+ );  
    arrs.push(obj)
}

console.log(arrs);

