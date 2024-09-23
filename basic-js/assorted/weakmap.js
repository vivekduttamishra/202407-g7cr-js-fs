class Country{
    constructor(name, capital, currency){
      this.name=name;
      this.capital=capital;
      this.currency=currency;
    }
    toString(){ return `${this.name}\t${this.capital}\t${this.currency}`}
  }
  
  
  const cache = new WeakMap();
  
  const IN={key:'in'};
  const UK={key:'uk'};
  
  
  cache.set(IN, new Country('India','New Dehli','INR'))
  cache.set(UK, new Country('UK','London','GBP'))
  
  function showInfo(key){
    if(cache.has(key)){
      console.log(`${cache.get(key)}`)
    } else{
      console.log(`Not Found: ${key.key}`);
    }
  }
  showInfo(IN)  //found
  showInfo({key:'jp'}) //not found
  showInfo({key:'in'}); //not found. because we use new key object

  //will not work
  for(const item of cache){
    console.log(item);
  }

