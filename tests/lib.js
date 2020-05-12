


/*
1. way
module.exports = ()=>{
  console.log('name');
}



2 way

const name = ()=>{
  console.log("name");
}

module.export = name;
*/
const private = "value";

module.exports = {
  value : 1,
  usetrId : [1,2,3],
  action (){console.log("action")
  }
}
