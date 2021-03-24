export const List  = ({ peoples }) => {






  return (
    <div>


   {
      peoples.map((people, index) => {
        return ( <div key = {index}> { people }</div>)
      }
    )

  }



   </div>
  )

}
