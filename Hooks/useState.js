import { useState } from "react";

// Random gift example
// const gifts = [
//   'gift1',
//   'gift2',
//   'gift3',
//   'gift4',
//   'gift5',
//   'gift6',
//   'gift7',
//   'gift8',
// ]

// function App() {

//   const [gift, setGift] = useState('Chưa có thưởng')

//   function giftHandler() {
//     setGift(gifts[Math.floor(Math.random() * gifts.length)])
//   }

//   return (
//     <div style={{ padding: 32}}>
//       <h1>{gift}</h1>
//       <button onClick={giftHandler}>Lấy thưởng</button>
//     </div>
//   );
// }

// 2-way binding example

// with input text
// function App() {
//   const [name, setName] = useState('')
//   const [email, setEmail] = useState('')

//   function submitHandler() {
//     // CALL API
//     console.log({name, email})
//   }

//   return (
//     <div style={{ padding: 32}}>
//       <input 
//         value={name}
//         onChange={e => setName(e.target.value)} 
//       />
//       <input 
//         value={email}
//         onChange={e => setEmail(e.target.value)} 
//       />
//       <button onClick={submitHandler}>Submit</button>
//     </div>
//   )
// }

// with input radio
// response from API
// const courses = [
//   {
//     id: 1,
//     name: 'HTML, CSS'
//   },
//   {
//     id: 2,
//     name: 'JavaScript'
//   },
//   {
//     id: 3,
//     name: 'React'
//   }
// ]

// function App () {

//   const [checked, setChecked] = useState ()

//   const submitHandler = () => {
//     console.log({ id: checked })
//   }

//   return (
//     <div style={{ padding: 32}}>
//       {courses.map((course) => {
//         return (
//             <div key={course.id}>
//               <input 
//                 type="radio"
//                 checked = {checked === course.id}
//                 // nếu checked = id thì mới được select
//                 // ứng dụng chỉ được check 1 trong 3
//                 onChange={() => setChecked(course.id)} 
//               />
//               {course.name}
//             </div>
//           )
//         })}
//       <button onClick={submitHandler}>Register</button>
//     </div>
//   )
// }


// with input checkbox

// function App () {

//   const [checked, setChecked] = useState ([])

//   const checkHandler = (id) => {
//     setChecked(prev => { 
//       const isChecked = checked.includes(id);

//       if (isChecked) {
//         // nếu id đã được check -> uncheck
//         return checked.filter(item => item !== id)
//         // lọc ra những item có id khác với id đang uncheck
//       } else {
//         return [...prev, id]
//       }

//     })
//   }
  
//   const submitHandler = () => {
//     console.log({ ids: checked })
//   }

//   return (
//     <div style={{ padding: 32}}>
//       {courses.map((course) => {
//         return (
//             <div key={course.id}>
//               <input 
//                 type="checkbox"
//                 checked = {checked.includes(course.id)}
//                 // khi id có trong array checked thì mới hiện check
//                 onChange={() => checkHandler(course.id)} 
//               />
//               {course.name}
//             </div>
//           )
//         })}
//       <button onClick={submitHandler}>Register</button>
//     </div>
//   )
// }

///////////////
// IMPORTANT //
///////////////
// Make a todo app
function App() {
    // const storageTasks = JSON.parse(localStorage.getItem('tasks'))
  
    const [task, setTask] = useState('')
  
    // const [tasks, setTasks] = useState(storageTasks ?? [])
    // nếu storageTasks là null hoặc undefined thì lấy giá trị đằng sau
  
    // Tối ưu hóa => ko để dòng parse chạy nhiều hơn số lần cần thiết
    const [tasks, setTasks] = useState(() => {
      const storageTasks = JSON.parse(localStorage.getItem('tasks'))
      console.log(storageTasks)
      // không parse lại cho đến khi refresh giao diện
      return storageTasks ?? []
    })
  
    const submitHandler = () => {
      setTasks(prev => {
        const newTasks = [...prev, task]
  
        // save to local storage
        const jsonTasks = JSON.stringify(newTasks)
        localStorage.setItem('tasks', jsonTasks)
  
        return newTasks
      })
      setTask('')
    }
  
    const deleteHandler = (index) => {
      setTasks(prev => {
        prev.splice(index, 1)
        localStorage.setItem('tasks', JSON.stringify([...prev]))
        return [...prev]
      })
    }
  
    return (
      <div style={{padding: 32}}>
        <input onChange={e => setTask(e.target.value)} value={task} />
        <button onClick={submitHandler}>Add</button>
  
        <ul>
          {tasks.map((task, index) => {
            return (
            <li key={index}>
              {task}
              <button onClick={() => deleteHandler(index)}>DELETE</button>
            </li>
            )
          })}
        </ul>
      </div>
    )
  }


export default App;
