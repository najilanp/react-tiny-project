import "./App.css";
import React ,{useState, useRef,useEffect } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import firebase from "./Firebase";
import { Form, Button} from 'antd';


const ref = firebase.firestore().collection("developers")


export default function App() {

  const [content, setContent] = useState('');
  const [initial,setInitial] = useState('')
  const [data, setdata] = useState([])
  const [loader, setloader] = useState(true)

/**To get the data */


  function getData(){
    ref.onSnapshot((querySnapshot) => {
      const items = []
      querySnapshot.forEach((doc) => {
        items.push(doc.data())

      })
      console.log(items);
      setdata(items)
      setloader(false)
    })
  }

  useEffect(() => {
    getData()
  
  }, [])



/** To save data to firebase from tinymce*/

    const editorRef = useRef();

     const submit = (e) => {

      var newContent=editorRef.current.getContent()
            
              ref
              .doc('guide1')
              .update({
                content:newContent
              }).then(()=>
              setContent(newContent)
              )      
     }
   

  return (

     <>

  <div className="App">  

     {loader === false ?
       (data.map((guide1) => (
          
            <div dangerouslySetInnerHTML={{ __html: guide1.content }} />
      
       ))):null}

   </div>

  {/* created a Form with editor and button as 2 form items */}

<Form onFinish={submit}>  
    
<Form.Item>

      <Editor

        apikey ="x1fnjj8px72i05pckeykdwjpwyam829iii5rxvsm962o4jdd"
        onInit={(evt, editor) => editorRef.current = editor}
        // onInit={handleInit}
        // onEditorChange={handleUpdate}
        initialValue={initial}
        init={{
          selector: 'textarea',
          height: 500,
          // menubar: false,
          // plugins: 'image',
          menubar: 'insert',
          // toolbar: 'image',
          plugins: [
            'advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table paste code help wordcount image '
          ],
          toolbar: 'undo redo | formatselect | ' +
          'bold italic backcolor | alignleft aligncenter ' +
          'alignright alignjustify | bullist numlist outdent indent | ' +
          'removeformat | help |image',
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

