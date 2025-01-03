export default async (feedbackForm) => {
          
      let response = await fetch('/telegram', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(feedbackForm)
      });
      
      let result = await response.json();
      alert(result.message);
}

export const feedbackForm = async (feedbackForm) => {
    console.log("получил", feedbackForm);   
      
    let response = await fetch('/telegram', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(feedbackForm)
    });
    
    let result = await response.json();
    alert(result.message);
}