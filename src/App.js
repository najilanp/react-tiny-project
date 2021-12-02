import "./App.css";
import React ,{useState, useRef,useEffect } from 'react';
// import FbCreate from "./FbCreate";
import { Editor } from '@tinymce/tinymce-react';
import firebase from "./Firebase";
import { Form, Button, Input } from 'antd';

const ref = firebase.firestore().collection("Guides")





export default function App() {

  const [content, setContent] = useState('');



  // function createDoc(newDataObj){
      
  //   ref
  //   .doc()
  //   .set(newDataObj)
  //   .catch((err) =>{
  //     alert(err);
  //     console.log(err);
  //   })
     
  // }



     const submit = (e) => {
      //  console.log(editorRef.current.getContent())
            var newContent=editorRef.current.getContent()
            console.log(newContent);
            setContent(newContent);
            ref
      .doc()
      .set(newContent)
      .catch((err) =>{
        alert(err);
        console.log(err);
      })
     }
  

    const editorRef = useRef();
  //       const submit = () => {
  //      if (editorRef.current) {
    
  //      console.log(editorRef.current.getContent());
  //      }
 
  //  };

//   const handleInit = (evt, editor) => {
//     setContent(editor.getContent());
// };



const handleUpdate = (value, editor) => {
    const editorContent = editor.getContent();
    setContent(editorContent);
};



  function handleupdate(editor){
    const editorContent = editorRef.current.getContent()
    ;

    console.log(editorContent)
  }

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


console.log(content);
  return (

    <>

  {/* <div className="App">  */}

   {/* <h1>Heloo Developers</h1> */}

    {/* {loader === false ?
    (data.map((dev) => (
      
   
      <div>

      

     </div> 
    
    
    ))):null}  */}

    {/* <FbCreate /> */}

    {/* </div>  */}
    


<Form onFinish={submit} >
    
<Form.Item>

      <Editor

        apikey ="x1fnjj8px72i05pckeykdwjpwyam829iii5rxvsm962o4jdd"
        onInit={(evt, editor) => editorRef.current = editor}
        // onInit={handleInit}
        onEditorChange={handleUpdate}
        initialValue="<p>qwertyuiop</p>"
        init={{
          selector: 'textarea',
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

      
      </Form.Item>
 
 
<Form.Item >
        <Button type="primary"htmlType="submit">
          Submit
        </Button>
</Form.Item>
</Form>

    </>
    
  );
  }

      // export {ref};