export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '637ee3cf28mshd7c20c06b70f695p1e8bb7jsn3b7ed2037d31',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

export const fetchData = async (url, options) => {
     const response = await fetch(url, options)
     const data = await response.json();
     return data
}