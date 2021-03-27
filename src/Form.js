import {　useState　} from 'react'
export const Form =({ onAddPeople }) => {
  const [name,setName]=useState('');
  const [number,setNumber]=useState('');
  const [old,setOld]=useState('');

  const submitForm = (e) => {
    e.preventDefault();
    /*
      name: "Michael"
      number: "123-4567"
      old: "28"

      now: "Michael123-456728"
      ideal: "Michael 123-4567 28"
     */
    // onAddPeople(name + "," + number + "," + old);
    onAddPeople(`${name},${number},${old}`)
    setName('')
    setNumber('')
    setOld('')
    console.log('submitForm({text})');
  }

  const optionList = []
  for (let i=0; i<=100; i++) {
    optionList.push(<option key="{i}" >{i}</option>)
  }

  return (
    <div>
    <h1>入力フォーム</h1>
     <form onSubmit={submitForm}>
     <h4>名前</h4>
      <input
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}
      maxLength="25"
      placeholder="25文字以内"
      />

     <p>
      <h4>郵便番号</h4>
      <input
      type ="text"
      value={number}
      onChange={(e)=> setNumber(e.target.value)}
      maxLength='8'
      pattern="[0-9]{3}-[0-9]{4}"
      placeholder="123-1234"/>
       </p>

       <p>
       <h4>年齢</h4>
       <select
        value={old}
        onChange={(e)=> setOld(e.target.value)}>
        {optionList}
        </select>
       </p>



       <button>送信</button>
     </form>


    </div>

  )
}
