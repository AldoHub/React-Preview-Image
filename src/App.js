import React, { Component } from 'react';


class App extends Component {

constructor(){
  super();
  //the state of the image
  this.state={
    currentImage : "",
    status: false
  }
  //bind the this keywork
  this.fileHandler = this.fileHandler.bind(this);
  
}

fileHandler= (e) => {
 
  console.log(e.target.files[0]);
  
  //check there is a file (image).
  if(e.target.files != null || e.target.files[0] != null){
        //access the image
        //which is stored inside the files[0] property and index.
        
        // you must check if the value inside currentImage is "undefined" 
        // when you cancel the file prompt the value will be set to undefined.       
        
        this.setState({ currentImage:  e.target.files[0]});

        this.setState({ status: true });

        //lets log the status of the state
        //as we run the app to see what it stores.
        console.log(this.state);

        if (e.target.files && e.target.files[0]) {
          var reader = new FileReader();
          
          reader.onload = (e) => {
            //when the image is loaded set the src attribute 
            //to the element #cover
            document.getElementById("cover").setAttribute('src', e.target.result);
          }
          
          reader.readAsDataURL(e.target.files[0]);
      }
    
  }else {
    console.log("There is no file on the field");
  }
  
  

}
  render() {
    return (
      <div className="App">
        <h1>Image Preview with React.</h1>
        <input type="file" name="file" onChange={this.fileHandler} />
      <div>
          {
            /* render one of these two depending
            on the status property */
            this.state.status ? (
                 /* Lets display the image */  
              <div className="image-container">
               <p className="message">This is the image soon to be uploaded.</p>
                  <img id="cover" src="" />
              </div>
            ) : (
               /* Lets show a message to be polite */  
              <p>No image to show.</p>
            )
            
          }
        </div>


      </div>
    );
  }
}

export default App;
