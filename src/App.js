import "./App.css";
import React,{ useRef } from 'react';
// import {useState,useEffect} from "react";
// import FbCreate from "./FbCreate";
import { Editor } from '@tinymce/tinymce-react';
// import firebase from "./Firebase";
import { Button } from 'antd';

// const ref = firebase.firestore().collection("Developers")


export default function App() {

  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };


  // const [data, setdata] = useState([])
  // const [loader, setloader] = useState(true)

  // function getData(){
  //   ref.onSnapshot((querySnapshot) => {
  //     const items = []
  //     querySnapshot.forEach((doc) => {
  //       items.push(doc.data())
  //     })
  //     console.log(items);
  //     setdata(items)
  //     setloader(false)
  //   })
  // }

  // useEffect(() => {
  //   getData()
  
  // }, [])



  return (

    <>

{/* <div className="App">

   <h1>Heloo Developers</h1>

    {loader === false ?
    (data.map((dev) => (
      
   
      <div>
        <h1>Name : {dev.name}</h1>
        <p>Skill : {dev.skill}</p>
      
     </div> 
    
    
    ))):null}

    <FbCreate />

    
  
   </div> */}




      <Editor

        apikey ="x1fnjj8px72i05pckeykdwjpwyam829iii5rxvsm962o4jdd"
        onInit={(evt, editor) => editorRef.current = editor}
        initialValue="<p>qwertyuiop</p>"
        init={{
          height: 500,
          menubar: false,
          plugins: [
            'advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table paste code help wordcount'
          ],
          toolbar: 'undo redo | formatselect | ' +
          'bold italic backcolor | alignleft aligncenter ' +
          'alignright alignjustify | bullist numlist outdent indent | ' +
          'removeformat | help',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}

      />

      <Button type="primary">Primary Button</Button>


    </>
  );
      }

      // export {ref};

  




  