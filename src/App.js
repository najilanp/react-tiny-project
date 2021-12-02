import "./App.css";
import React ,{useState, useRef,useEffect } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import firebase from "./Firebase";
import { Form, Button} from 'antd';
// import { tSDeclareFunction } from "@babel/types";

// const ref = firebase.firestore().collection("guides")
const ref = firebase.firestore().collection("developers")


export default function App() {

  const [content, setContent] = useState('');
  const [initial,setInitial] = useState('')
  const [data, setdata] = useState([])
  const [loader, setloader] = useState(true)



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




/**To get the initial data */
// function getData(){

  ref.onSnapshot((querySnapshot) => {
    const items = []
    querySnapshot.forEach((doc) => {
      items.push(doc.data())
    })
    console.log(items);
    setInitial(items[0].content)
    
  })
// }


useEffect(()=>{

  getData()

},[])

    const editorRef = useRef();

     const submit = (e) => {

      var newContent=editorRef.current.getContent()
    //         // console.log(newContent);

           
              ref
              .doc('guide1')
              .update({
                content:newContent
              }).then(()=>
              setContent(newContent)
             // getContent();
              ) 
           
     }
   
// console.log(content)

// const handleUpdate = (value, editor) => {
//     const editorContent = editor.getContent();
//     setContent(editorContent);
// };

// console.log(content);





  return (

     <>

  <div className="App">  

   {/* <h1>Heloo Developers</h1>  */}

     {loader === false ?
    (data.map((guide1) => (

     
      
      
    <div>

      <h1> {guide1.content}</h1>
    </div>
      

      
     ))):null} 

    

     </div>  



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

